import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>teacher-admin</span>
      </div>
      <div className="icons">
        
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Tutor 1</span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
