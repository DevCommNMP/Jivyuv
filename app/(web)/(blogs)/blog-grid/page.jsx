import NewsSectionBox from "../../../../components/NewsSection";

const NewsSection = () => {
    return (
        <>
            {/* Page Title */}
            <section
                className="page-title centred"
                style={{ backgroundImage: "url(assets/images/background/page-title-5.jpg)" }}
            >
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Elements</h1>
                        <p>News Block 02</p>
                    </div>
                </div>
            </section>
            {/* End Page Title */}

            {/* News Section */}
            <NewsSectionBox />
            {/* News Section End */}
        </>
    );
};

export default NewsSection;
