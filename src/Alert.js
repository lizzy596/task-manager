import { useEffect } from 'react'
const Alert = ({ msg, type, removeAlert, allItems }) => {
  useEffect(() => {

    const timeout = setTimeout(() => {
      removeAlert();
    }, 1500);
    return () => clearTimeout(timeout);

  }, [allItems])


  return <div className="alert-box">
           <p className={type}>{msg}</p>
          </div>
}

export default Alert