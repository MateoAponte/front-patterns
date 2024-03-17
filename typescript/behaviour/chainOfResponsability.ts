class AttackInfo {
  public damage: number;
  public type: AttackType;

  constructor(damage, type) {
    this.damage = damage;
    this.type = type;
  }
}
enum AttackType {
  Ice,
  Fire,
  Normal,
}

// Clase central que direcciona y setea los punteros de cada ataque permitiendo que se encadenen
abstract class Attack {
  private _nextAttack: Attack;

  public setNextAttack(_nextAttack: Attack) {
    this._nextAttack = _nextAttack;
  }

  public calculateDamage(attackInfo: AttackInfo): Number {
    if (this._nextAttack !== null) {
      return this._nextAttack.calculateDamage(attackInfo);
    }
    return 0;
  }
}

class NormalAttack extends Attack {
  public calculateDamage(attackInfo: AttackInfo): Number {
    if (attackInfo.type === AttackType.Normal) return attackInfo.damage;
    return super.calculateDamage(attackInfo);
  }
}

class IceAttack extends Attack {
  public calculateDamage(attackInfo: AttackInfo): Number {
    if (attackInfo.type === AttackType.Ice) return attackInfo.damage * 1.2;
    return super.calculateDamage(attackInfo);
  }
}

class FireAttack extends Attack {
  public calculateDamage(attackInfo: AttackInfo): Number {
    if (attackInfo.type === AttackType.Fire) return attackInfo.damage * 1.5;
    return super.calculateDamage(attackInfo);
  }
}

const initApp = () => {
  const normalAtk = new NormalAttack();
  const fireAtk = new FireAttack();
  const iceAtk = new IceAttack();

  // Se crea el puntero del NormalAttack
  normalAtk.setNextAttack(fireAtk);
  // Se crea el puntero del fireAttack
  fireAtk.setNextAttack(iceAtk);

  // Preguntar desde normal attack a Normal
  const normalDamage = normalAtk.calculateDamage(new AttackInfo(10, AttackType.Normal));
  console.log(normalDamage);

  // Preguntar desde normal attack a Fire
  const fireDamage = normalAtk.calculateDamage(new AttackInfo(10, AttackType.Fire));
  console.log(fireDamage);

  // Preguntar desde normal attack a Ice
  const iceDamage = normalAtk.calculateDamage(new AttackInfo(10, AttackType.Ice));
  console.log(iceDamage);
};

initApp();

// Clase que muestra el mensaje
class ClientAtention {
  public requestType: RequestType;
  public message: String;
  constructor(requestType: RequestType, message: String) {
    this.requestType = requestType;
    this.message = message;
  }
  public setMessage(message: String) {
    this.message = message;
  }
}
// Diccionario de Tipos
enum RequestType {
  Complaint,
  Answer,
  TechnicalAssistance,
}
// Clase contrato para heredar y hacer polimorfismo
abstract class Requests {
  private _nextRequest: Requests;

  // Método de punteros
  public setNextRequest(nextRequest: Requests) {
    if (this._nextRequest !== null) {
      this._nextRequest = nextRequest;
    }
  }
  // Método que pasa al siguiente manejador la petición
  public requestHandler(clientRequest: ClientAtention) {
    if (this._nextRequest !== null) {
      return this._nextRequest.requestHandler(clientRequest);
    }
    return 0;
  }
}
// Clase heredada que hace polimorfismo
class ComplaintRequest extends Requests {
  public requestHandler(clientRequest: ClientAtention) {
    if (clientRequest.requestType === RequestType.Complaint) {
      clientRequest.setMessage('Solicitud es una Queja: ' + clientRequest.message);
      return clientRequest;
    }
    return super.requestHandler(clientRequest);
  }
}
// Clase heredada que hace polimorfismo
class AnswerRequest extends Requests {
  public requestHandler(clientRequest: ClientAtention) {
    if (clientRequest.requestType === RequestType.Answer) {
      clientRequest.setMessage('Solicitud es una Pregunta: ' + clientRequest.message);
      return clientRequest;
    }
    return super.requestHandler(clientRequest);
  }
}
// Clase heredada que hace polimorfismo
class TechnicalAssistanceRequest extends Requests {
  public requestHandler(clientRequest: ClientAtention) {
    if (clientRequest.requestType === RequestType.TechnicalAssistance) {
      clientRequest.setMessage('Solicitud es una Pregunta: ' + clientRequest.message);
      return clientRequest;
    }
    return super.requestHandler(clientRequest);
  }
}
const requests = () => {
  // Se tiene una petición
  const request = new ClientAtention(RequestType.Answer, 'This is a Asnwer');

  // Se inicializan clases
  const complaint = new ComplaintRequest();
  const answer = new AnswerRequest();
  const technicalAssistance = new TechnicalAssistanceRequest();

  // Se crean los punteros
  complaint.setNextRequest(answer);
  answer.setNextRequest(technicalAssistance);
  technicalAssistance.setNextRequest(complaint);

  // Cadena de responsabilidad hecha
  console.log(complaint.requestHandler(request));
  console.log(answer.requestHandler(request));
  console.log(technicalAssistance.requestHandler(request));
};
requests();
