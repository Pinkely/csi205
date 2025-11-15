import dew from "../assets/image/dew.png";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4 p-md-5 text-center">

              <div className="mb-4 d-flex justify-content-center">
                <img
                  src={dew}
                  alt="Profile Image"
                  className="rounded-circle border border-5 border-primary"
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                />
              </div>

              <h2 className="card-title text-primary fw-bold mb-1">
                นายกนก รัตนเรืองรักษ์
              </h2>
              <h4 className="card-subtitle mb-3 text-muted">
                67188118 | ชั้นปีที่ 2
              </h4>

              <hr className="my-4" />

              <p className="card-text lead mb-1">
                <i className="bi bi-building me-2 text-secondary"></i>
                มหาวิทยาลัยศรีปทุม
              </p>
              <p className="card-text mb-4">
                <i className="bi bi-laptop me-2 text-secondary"></i>
                คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์และการพัฒนาซอฟต์แวร์
              </p>

              <div className="alert alert-warning mt-4 py-3 border-0 shadow-sm" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                อาจารย์ผมปั่นงานไม่ทันแล้วครับโปรดพิจารณนา
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;