import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    border: '1px solid #eee',
    maxWidth: '600px',
    margin: '0 auto',
  }}>
    <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>
      New Message from Portfolio
    </h1>
    <p style={{ fontSize: '16px', color: '#555' }}>
      <strong>Name:</strong> {name}
    </p>
    <p style={{ fontSize: '16px', color: '#555' }}>
      <strong>Email:</strong> {email}
    </p>
    <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      borderLeft: '4px solid #0077B7',
    }}>
      <p style={{ fontSize: '16px', color: '#333', whiteSpace: 'pre-wrap' }}>
        {message}
      </p>
    </div>
    <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />
    <p style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
      This email was sent from your portfolio contact form.
    </p>
  </div>
);
