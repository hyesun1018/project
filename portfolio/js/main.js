window.addEventListener("load", function(){
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

	let container=this.document.getElementById("container");
    let cont=container.children;

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
            else{
                n=4;
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

	trigger.add("#gnb, section");

	let targety=0;

	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("click", e => {
			e.preventDefault();
			gnb.classList.remove("open");
			body.classList.remove("fixed");
			tabDesign("close");

			setTimeout(() => {
				targety=cont[i].offsetTop;
				gsap.to(this.window, {scrollTo: targety, duration : 0.3});
			}, 300);
		});
	}

	let mainN=0;
	let home=document.getElementById("home");
	let probg=home.firstElementChild.children;

	function backgroundAniamtion(n){

		console.log(n);
		for(let i=0; i<probg.length; i++){
			if(i === n){
				probg[i].classList.add("active");
			}
			else{
				probg[i].classList.remove("active");
			}
		}
		// $(".project-bg").removeClass("active");
		// $(".project-bg").eq(n).addClass("active");
	}
	const swiper = new Swiper(".ctr-list", {
		// centeredSlides: true,
		// autoplay : {
		// 	delay : 5000,
		// 	disableOnInteraction : false,
		// },
		loop: true,
		pagination: {
			clickable: false,
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1020: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
		on: {
			init: function(){
				backgroundAniamtion(mainN);
			},
			slideChange: function(){
				mainN=this.realIndex;
				backgroundAniamtion(mainN);
			}
		}
	});

	let pos=0;

    const keytextString=[
		{
			title:"W Concept",
			client:"Client. W Concept"
		},
		{
			title:"Ecc plus",
			client:"Client. YBM ECC"
		},
		{
			title:"TOCOBO <br> 웹사이트 리뉴얼",
			client:"Client. TOCOBO"
		},
		{
			title:"OLGODA <br> 웹사이트 리뉴얼",
			client:"Client. OLGODA"
		},
		{
			title:"GIOINFRA <br> 웹사이트 리뉴얼",
			client:"Client. GIOINFRA"
		}
	];
	
	let current, total, winw;

	let exSlider=document.querySelector("#experience .exp-con");
	let [expswiper, expLi]=exSlider.children;
	let expswiLi=expswiper.firstElementChild.children;
	let exTitle=expLi.querySelector(".slide-title");
	let exClient=expLi.querySelector(".slide-client");
	let exDes=expLi.querySelector(".slide-description");
	let detailPG=exDes.firstElementChild;

	const expSwiper = new Swiper(".exp-img", {
		loop:true,
		autoplay : {
			delay : 5000,
			disableOnInteraction : false,
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			init: function(){
				current=this.realIndex;
				total=this.slides.length;

				expswiper.classList.add("active");
				expLi.classList.add("active");

				// $("#experience .swiper-slide"+(current+1)).addClass("active");
				// $("#experience .exp-list").addClass("active");

				exTitle.innerHTML = keytextString[current].title;
				exClient.innerHTML = keytextString[current].client;
				// $("#experience .slide-title").html(keytextString[current].title);
				// $("#experience .slide-client").html(keytextString[current].client);
			},
			slideChange: function(){
				current=this.realIndex;

				expLi.classList.remove("active");
				// $("#experience .exp-list").removeClass("active");

				for(let i=0; i<expswiLi.length; i++){
					if(current >= 2){
						detailPG.classList.add("active");
					// $("#experience a.project-li").addClass("active");
					}
					else{
						detailPG.classList.remove("active");
						// $("#experience a.project-li").removeClass("active");
					}
				}
				

				setTimeout(function(){
					expLi.classList.add("active");
					exTitle.innerHTML = keytextString[current].title;
					exClient.innerHTML = keytextString[current].client;
					// $("#experience .exp-list").addClass("active");
					// $("#experience .slide-title").html(keytextString[current].title);
					// $("#experience .slide-client").html(keytextString[current].client);
				}, 300);
			}
		},
		
	});
	
	let hd=document.getElementById("header");

	window.addEventListener('scroll', function(){
        if(window.scrollY >= 100){
            hd.classList.add('black');
        }else{
            hd.classList.remove('black');
        }
    });
});