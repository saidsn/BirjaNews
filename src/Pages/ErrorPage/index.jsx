import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import "./index.css"

function ErrorPage() {
  const [searchParams] = useSearchParams();
  const currentPath = searchParams.get('pathname');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    
    <div id="error-page">
      <div className="caution"><ReportProblemOutlinedIcon/></div>
      <h1>Oops!</h1>
      <p>Bağışlayın, gözlənilməz xəta baş verdi.</p>
      <p>
      Tələb olunan səhifə <strong>{currentPath}</strong> tapılmadı.
      </p>
      <div className="location">
      <button onClick={goBack}>Bir öncəki səhifə</button>
      <Link to="/">Ana Səhifə</Link>
      </div>
      <Outlet />
    </div>
    
   
  );
}

export default ErrorPage;