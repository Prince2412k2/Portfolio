import React from 'react';

// Decorator version
export default function Memo<T>() {
  return function (target: React.ComponentType<T>) {
    return React.memo(target);
  };
}

