import React from 'react';

import Notification from 'rc-notification';
import 'rc-notification/dist/rc-notification.min.css';

let notification;

Notification.newInstance(
  {
    style: {
      top: 20,
      left: '50%'
    }
  },
  n => (notification = n)
);

export default {
  error: message => {
    notification.notice({
      content: (
        <div className="d-flex align-items-center">
          <img src="./img/close.svg" alt="" height="14" className="mr-2" />
          <span>{message}</span>
        </div>
      )
    });
  },
  success: message => {
    notification.notice({
      content: (
        <div className="d-flex align-items-center">
          <img src="./img/check.svg" alt="" height="14" className="mr-2" />
          <span>{message}</span>
        </div>
      )
    });
  }
};
