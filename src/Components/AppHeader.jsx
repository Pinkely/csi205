
const AppHeader = () => {
  return (
    <div
      style={{
        border: "3px solid pink",      //เปลี่ยนสีขอบ
        borderRadius: "15px",         //ขอบโค้ง
        padding: "20px",
        margin: "20px auto",
        width: "fit-content",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", //เงา
      }}
    >
      <h1 className="text-center">วิชา CSI205 การพัฒนาโปรแกรมส่วนหน้า</h1>
    </div>
  );
};

export default AppHeader;

