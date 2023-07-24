window.addEventListener("load",()=>{
	let body=document.body;
	let gnb=document.getElementById("gnb");
	let gnbinner=gnb.firstElementChild;
	let gnbLi=gnbinner.firstElementChild.children;
	let tab=this.document.getElementsByClassName("tab")[0];
	let tabSpan=tab.firstElementChild.children;

	tabSpan[0].classList.add("active");

	let tabDesign=(msg) => {
		let n;

		(msg === "open") ? n=1 : n=0;

		for(let i=0; i<tabSpan.length; i++){
			if(i === n){
				tabSpan[i].classList.add("active");
			}
			else{
				tabSpan[i].classList.remove("active");
			}
		}
	};

	tab.addEventListener("click", (e)=>{
		e.preventDefault();

		if(!e.currentTarget.classList.contains("close")){
			e.currentTarget.classList.add("close");
			gnb.classList.add("open");
			body.classList.add("fixed");
			tabDesign("open");
		}
		else{
			e.currentTarget.classList.remove("close");
			gnb.classList.remove("open");
			body.classList.remove("fixed");
			tabDesign("close");
		}
	});

	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("mouseenter", (e) => {
			e.currentTarget.classList.add("active");
		});
		gnbLi[i].addEventListener("mouseleave", (e)=> {
			e.currentTarget.classList.remove("active");
		});
	}
	let n=0;
    let h, winHalf;

	function init(){
        h=window.innerHeight;
        winHalf=h*0.65;
    }
    init();
    
    this.window.addEventListener("resize", init);

	let main=this.document.getElementById("main-wrap");
	let cont=main.children;

    function scrollInteraction(t){
        for(let i=0; i<cont.length; i++){
            if(t < cont[1].offsetTop-winHalf){
                n=0;
            }
            else if(t < cont[2].offsetTop-winHalf){
                n=1;
            }
            else if(t < cont[3].offsetTop-winHalf){
                n=2;
            }
            else if(t < cont[4].offsetTop-winHalf){
                n=3;
            }
            else if(t < cont[5].offsetTop-winHalf){
                n=4;
            }
            else if(t < cont[6].offsetTop-winHalf){
                n=5;
            }
            else if(t < cont[7].offsetTop-winHalf){
                n=6;
            }
            else if(t < cont[8].offsetTop-winHalf){
                n=7;
            }
            else{
                n=8;
            }
        }
    }
	const trigger=new ScrollTrigger.default({
        trigger: {
            once: true,
            toggle: {
                class: {
                    in: "active",
                    out: "inactive"
                }
            },
            offset: {
                viewport: {
                    x: 0,
                    y: 0.30
                }
            }
        },
        scroll: {
            element: window,
            callback: (offset, dir) => { scrollInteraction(offset.y); }
        }
    });

	trigger.add("section");

	let hd=document.getElementById("header");
	let topBtn=document.getElementById("top-btn");

	window.addEventListener('scroll', function(){
        if(window.scrollY >= 100){
            hd.classList.add('hd-bg');
			topBtn.classList.add("up");
        }
		else{
            hd.classList.remove('hd-bg');
			topBtn.classList.remove("up");
        }
    });
	topBtn.onclick=()=>{
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
});