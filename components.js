import React from 'react';

export const Navbar = ({ logoText, links }) => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: '#2d3436',
    color: 'white',
    flexWrap: 'wrap'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>{logoText}</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: 0 }}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Card = ({ title, content, children }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    padding: '20px',
    margin: '15px auto',
    maxWidth: '100%',
    width: '400px',
    boxSizing: 'border-box'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0, color: '#333' }}>{title}</h3>
      <p style={{ color: '#666', lineHeight: '1.6' }}>{content}</p>
      {children}
    </div>
  );
};

export const Button = ({ label, onClick, variant = 'primary' }) => {
  const btnStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    transition: '0.3s',
    width: '100%',
    backgroundColor: variant === 'primary' ? '#0984e3' : '#636e72',
    color: 'white'
  };

  return (
    <button style={btnStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export const DataTable = ({ columns, data }) => {
  const containerStyle = {
    overflowX: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    margin: '20px 0'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'right'
  };

  const thStyle = {
    padding: '14px 16px',
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
    color: '#495057',
    fontWeight: '600'
  };

  const tdStyle = {
    padding: '14px 16px',
    borderBottom: '1px solid #e9ecef',
    color: '#212529'
  };

  return (
    <div style={containerStyle} dir="rtl">
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={thStyle}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={tdStyle}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};