import "./quiz.css"
function Quiz(){
    return(
        <div classNameName=" row justify-content-md-center title">
            <div className="container col-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-secondary questions">Do you have height temperature ?</h4>
                    </div>
<ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked />
    <label className="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"/>
    <label className="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"/>
    <label className="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>
</div>
</div>
        </div>
    )
}
export default Quiz