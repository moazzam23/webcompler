export default {
	css: `body{
        background:white;
        width:100%;
        height:100%;
    }
    .blend{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }
    h3{
        color:#fff;
    }
    p{
        color:rgba(255,255,255,0.75);
    }`,
	html: `<div id="root"></div>`,
	javascript: `function App() {
        return (
            <div className="blend">
             
            </div>
        );
    }
    ReactDOM.render(<App />, document.getElementById("root"));
`,
};
