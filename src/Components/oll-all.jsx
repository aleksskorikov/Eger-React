
import React, { useEffect } from 'react';
import "../styles/scss/_oll-all.scss";

const OllAll = () => {
    useEffect(() => {
        const button = document.getElementById("on-all");
        button.onclick = function () {
            document.getElementById("header").scrollIntoView({ behavior: "smooth" });
        };
    }, []);

    return (
        <>
            <button className="on-all" id="on-all"></button>
        </>
    );
};

export default OllAll;
