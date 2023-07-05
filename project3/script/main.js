window.addEventListener("load", function(){
    let mtab=this.document.getElementsByClassName("m-tab")[0];
    let mgnb=this.document.getElementById("m-gnb");
    let mgnbLi=mgnb.firstElementChild.children;
    let close=this.document.getElementById("m-close");
    let container=this.document.getElementById("container");
    let cont=container.children;
    let hd=this.document.getElementById("header");
    let n=0;
    let h, winHalf;
    let bus=this.document.getElementsByClassName("bus-noti")[0];
    let busLi=bus.firstElementChild.children;
    
    for(let i=0; i<mgnbLi.length; i++){
        mgnbLi[i].addEventListener("mouseenter", (e) => {
            e.currentTarget.classList.add("active");
        });
        mgnbLi[i].addEventListener("mouseleave", (e)=> {
            e.currentTarget.classList.remove("active");
        });
    }
    for(let i=0; i<busLi.length; i++){

        busLi[i].addEventListener("mouseenter", (e) => {
            e.currentTarget.classList.add("active");
        });
        busLi[i].addEventListener("mouseleave", (e)=> {
            e.currentTarget.classList.remove("active");
        });
    }

    mtab.addEventListener("click", (e) => {
        e.preventDefault();
        mgnb.classList.add("open");
    });

    close.addEventListener("click", (e) => {
        e.preventDefault();
        mgnb.classList.remove("open");
    });

    let GNB=this.document.getElementById("gnb");
    let GNBLi=GNB.firstElementChild.children;


    
    function init(){
        h=window.innerHeight;
        winHalf=h*0.65;
    }
    init();
    
    this.window.addEventListener("resize", init);

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
            else{
                n=5;
            }
        }
        for(let i=0; i<GNBLi.length; i++){
            if(i === n){
                if(GNBLi[i].classList.contains("active") === false)
                GNBLi[i].classList.add("active");
            }
            else{
                if(GNBLi[i].classList.contains("active") === true)
                GNBLi[i].classList.remove("active");
            }
        }
    }

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 100){
            hd.classList.add('black');
        }else{
            hd.classList.remove('black');
        }
    });
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

	trigger.add("#gnb, .cont");

	let targety=0;

	for(let i=0; i<GNBLi.length; i++){
		GNBLi[i].addEventListener("click", (e) => {
			e.preventDefault();
			targety=cont[i].offsetTop;
			gsap.to(this.window, {scrollTo: targety, duration : 0.5});
		});
		mgnbLi[i].addEventListener("click", e => {
			e.preventDefault();
			mgnb.classList.remove("open");

			setTimeout(() => {
				targety=cont[i].offsetTop;
				gsap.to(this.window, {scrollTo: targety, duration : 0.3});
			}, 300);
		});
	}

    let homeTxt=this.document.getElementsByClassName("home-text")[0];
    let Hmore=homeTxt.querySelector("a");

    Hmore.addEventListener("mouseenter", (e) => {
        e.currentTarget.classList.add("white");
    });
    Hmore.addEventListener("mouseleave", (e)=> {
        e.currentTarget.classList.remove("white");
    });

});