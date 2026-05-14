export default function BmiResult({ bmi }) {
  if (!bmi || bmi === Infinity || isNaN(bmi)) return null;

  let message = "";
  let color = "";

  if (bmi < 18.5) {
    message = "Недостатня вага";
    color = "#2c99e1"; 
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Норма";
    color = "#14de4a"; 
  } else if (bmi >= 25 && bmi < 30) {
    message = "Надмірна вага";
    color = "#f6d82f"; 
  } else {
    message = "Ожиріння";
    color = "#f13131"; 
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Ваш ІМТ: {bmi}
      </div>
      <div style={{ fontSize: '1.2rem', color: color, fontWeight: '600' }}>
        Діагноз: {message}
      </div>
    </div>
  );
}