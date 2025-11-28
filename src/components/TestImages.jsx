export function TestImages() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      background: 'white', 
      padding: '20px', 
      zIndex: 9999,
      maxHeight: '80vh',
      overflow: 'auto',
      border: '5px solid red',
      fontFamily: 'Arial'
    }}>
      <h3>TEST OBRAZKÓW</h3>
      
      {/* Test logo */}
      <div><img src="/logo.png" alt="Logo" width="100" onError={(e) => e.target.style.border = '5px solid red'} /></div>
      
      {/* Test flagi */}
      <div><img src="/pl.png" alt="PL" width="100" onError={(e) => e.target.style.border = '5px solid red'} /></div>
      
      {/* Test projektu */}
      <div><img src="/project1/1.jpg" alt="Projekt 1" width="200" onError={(e) => e.target.style.border = '5px solid red'} /></div>
    </div>
  );
}