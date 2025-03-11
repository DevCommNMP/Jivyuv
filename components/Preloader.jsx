export default function Preloader() {
  return (
    <>
      <div className="loader-wrap">
        <div className="preloader">
          
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="J" className="letters-loading">
                  {" "}
                  J{" "}
                </span>
                <span data-text-preloader="I" className="letters-loading">
                  {" "}
                  I{" "}
                </span>
                <span data-text-preloader="V" className="letters-loading">
                  {" "}
                  V{" "}
                </span>
                <span data-text-preloader="Y" className="letters-loading">
                  {" "}
                  Y{" "}
                </span>
                <span data-text-preloader="U" className="letters-loading">
                  {" "}
                  U{" "}
                </span>
                <span data-text-preloader="G" className="letters-loading">
                  {" "}
                  G{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
