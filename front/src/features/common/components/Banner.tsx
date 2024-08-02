import React, { useEffect, useRef, useState } from 'react';
import { NotificationStatus } from '../../creational/singleton/interfaces/notification.ts';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdOutlineClosedCaption } from 'react-icons/md';

interface BannerProps {
  title: string;
  status: string;
  onClose: () => void;
  onUpdate?: () => void;
  children?: React.ReactNode;
  message: string;
  loader?: number;
  hasClose: boolean;
  hasLoader: boolean;
}

export const PTBanner: React.FC<BannerProps> = ({
  title,
  onClose,
  children,
  message,
  status,
  loader = 0,
  hasClose,
  onUpdate,
  hasLoader,
}) => {
  const [loading, setLoading] = useState(0);
  const [className, setClassName] = useState('banner');
  let intervalLoader = useRef<number | null>(null);
  let timeOutLoader = useRef<number | null>(null);

  const hideBanner = (callback?: () => void) => {
    setClassName('banner banner--loaded');
    if (callback) callback();
  };

  const closeBanner = () => {
    if (intervalLoader.current) {
      clearInterval(intervalLoader.current);
      intervalLoader.current = null;
    }
    hideBanner(onClose);
  };

  useEffect(() => {
    if (hasLoader) {
      intervalLoader.current = setInterval(() => {
        setLoading((prevLoading) => {
          const newLoading = prevLoading + 100;
          return newLoading >= loader * 1000 ? loader * 1000 : newLoading;
        });
      }, 100);
    }

    return () => {
      if (intervalLoader.current !== null && timeOutLoader.current !== null) {
        clearInterval(intervalLoader.current);
        clearTimeout(timeOutLoader.current);
        intervalLoader.current = null;
        timeOutLoader.current = null;
      }
    };
  }, [loader, hasLoader]);

  useEffect(() => {
    if (loading >= loader * 1000) {
      if (intervalLoader.current) clearInterval(intervalLoader.current);
      intervalLoader.current = null;
      hideBanner(onUpdate);
    }
  }, [loading, loader]);

  const percentage = (loading / (loader * 1000)) * 100;

  const Loader = hasLoader && (
    <div className="banner__loader" style={{ width: `${percentage}%` }}></div>
  );
  const Close = hasClose && (
    <div className="banner__header-close" onClick={closeBanner}>
      <IoMdCloseCircle />
    </div>
  );

  const getStatusClass = (status: NotificationStatus) => {
    switch (status) {
      case NotificationStatus.SUCCESS:
        return ' banner--success';
      case NotificationStatus.ERROR:
        return ' banner--error';
      case NotificationStatus.INFO:
        return ' banner--info';
      default:
        return '';
    }
  };

  return (
    <div className={`${className}${getStatusClass(status)}`}>
      <div className="banner__header">
        <div className="banner__header-title">{title}</div>
        {Close}
      </div>
      <div className="banner__body">
        <div className="banner-message">{message}</div>
        {children}
      </div>
      {Loader}
    </div>
  );
};
