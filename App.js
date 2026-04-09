import React from 'react';
import { Navbar, Card, Button, DataTable } from './components';

function App() {
  const navLinks = [
    { text: 'דשבורד', url: '/' },
    { text: 'הגדרות', url: '/settings' }
  ];

  const columns = ['שם פרויקט', 'סוג משימה', 'סטטוס', 'התקדמות'];
  
  const tableData = [
    { 'שם פרויקט': 'CiviWatch Guardian AI', 'סוג משימה': 'תיוג נתונים', 'סטטוס': 'פעיל', 'התקדמות': '85%' },
    { 'שם פרויקט': 'אופטימיזציית מודל', 'סוג משימה': 'בקרת איכות', 'סטטוס': 'בבדיקה', 'התקדמות': '60%' },
    { 'שם פרויקט': 'אופרציה כללית', 'סוג משימה': 'הגדרת תהליכי עבודה', 'סטטוס': 'הושלם', 'התקדמות': '100%' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh' }} dir="rtl">
      <Navbar logoText="מערכת ניהול" links={navLinks} />
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#2d3436' }}>סקירת מערכת</h2>
        
        <Card 
          title="פעולה מהירה" 
          content="כאן תוכל לבצע פעולות נפוצות במהירות מבלי לנווט במערכת."
        >
          <Button label="צור משימה חדשה" onClick={() => alert('משימה חדשה נוצרה')} />
        </Card>

        <h3 style={{ color: '#2d3436', marginTop: '40px' }}>סטטוס פרויקטים</h3>
        <DataTable columns={columns} data={tableData} />
      </div>
    </div>
  );
}

export default App;