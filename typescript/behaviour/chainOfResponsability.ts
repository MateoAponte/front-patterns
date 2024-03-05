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
