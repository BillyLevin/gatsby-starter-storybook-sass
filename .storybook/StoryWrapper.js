import React from 'react';

import '../src/styles/main.scss';

export function StoryWrapper({ title, subtitle, children, ...props }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'white',
        alignItems: 'center',
      }}
    >
      <header
        style={{
          flex: '0 0 0',
          padding: 30,
        }}
      >
        <h1 style={{ marginBottom: 0, fontSize: 24, fontFamily: 'sans-serif' }}>{title}</h1>
        <h2
          style={{
            marginBottom: 0,
            fontSize: 12,
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </h2>
      </header>
      <div style={{ flex: 1, overflow: 'auto', padding: 30 }}>{children}</div>
    </div>
  );
}
