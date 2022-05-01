import styles from './alerts.module.css'


function SuccessAlert(props){
    
    
    
    
    
    
    
    return(
        <>
            <div className={`row g-0 fixed-top mt-3 me-3 d-flex justify-content-end`}>
                <div  className={`col-11 card col-md-3 bg-success ${styles.alert_card}`}>
                  <div className="row p-1">
                    <div className="col-2">
                    </div>
                    <div className="col-10">
                        <div className='row g-0'>
                            <div className='col-1'>

                            </div>
                            <div className='col-11'>
                            <span>{`${props.type}`} added successfully</span>
                            </div>

                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}
export default SuccessAlert;