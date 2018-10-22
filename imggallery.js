//display gallery of Nasa images
$(function() {
        let imgUrl1 = "https://apod.nasa.gov/apod/image/1807/bracewellradiosundial.jpg"; //*
		let imgUrl2 = "https://apod.nasa.gov/apod/image/1807/M57Ring_HubbleGendler_3000.jpg";//***
		let imgUrl3 = "https://apod.nasa.gov/apod/image/1807/QuasarJetDrawing_DESY_3508.jpg"; //*
		let imgUrl4 = "https://apod.nasa.gov/apod/image/1807/VenusMoonNeedles_Young_2400.jpg"; //*
		let imgUrl5 = "https://apod.nasa.gov/apod/image/1807/MarsSlopeStreaks_MRO_3199.jpg"; //*
		let imgUrl6 = "https://apod.nasa.gov/apod/image/1807/CerealiaFaculaPIA21924.jpg";//***
		let imgUrl7 = "https://apod.nasa.gov/apod/image/1807/KettlePoint.jpg"; //*
		let imgUrl8 = "https://apod.nasa.gov/apod/image/1807/a11pan1040226lftsm.jpg"; //*
		let imgUrl9 = "https://apod.nasa.gov/apod/image/1807/CMB2018_Planck_4672.jpg"; //**
		let imgUrl10 = "https://apod.nasa.gov/apod/image/1807/FermiFinals.jpg"; //***
		
		let imgUrl11 = "https://apod.nasa.gov/apod/image/1807/CloudsOfEarthAndSky_Perrone_931.jpg";//**
		let imgUrl12 = "https://apod.nasa.gov/apod/image/1807/NGC5866_Block_1518.jpg";  //***
		let imgUrl13 = "https://apod.nasa.gov/apod/image/1807/B228_2018-07-07Santos2048.jpg" //*** 
		let imgUrl14 = "https://apod.nasa.gov/apod/image/1807/MarsOpp2panelSTSCI_2094.jpg";   //**
		let imgUrl15 = "https://apod.nasa.gov/apod/image/1807/BloodMoonEclipse_Fairbairn_3800.jpg";
		let imgUrl16 = "https://apod.nasa.gov/apod/image/1807/SouthPole_MarsExpress_2310.jpg";
		let imgUrl17 = "https://apod.nasa.gov/apod/image/1808/IrisNebula_Sgueglia_2729.jpg";  //***
		let imgUrl18 = "https://apod.nasa.gov/apod/image/1808/eclipse20180717lazzarotti.jpg"; //*
		let imgUrl19 = "https://apod.nasa.gov/apod/image/1808/ecl-lun-2018-07-27-seq-1ayiomamitis.jpg"; //**
		let imgUrl20 = "https://apod.nasa.gov/apod/image/1808/AroundSadrNarduzziColombari.jpg"; //***
		
		let imgUrl21 = "https://apod.nasa.gov/apod/image/1808/OrionTrapezium_HubbleGendler_4000.jpg"; //***
		let imgUrl23 = "https://apod.nasa.gov/apod/image/1808/MoonMarsGoat_Brustel_3258.jpg"; //**
		let imgUrl24 = "https://apod.nasa.gov/apod/image/1808/Cherney_TLE201807.jpg"; //*
		let imgUrl25 = "https://apod.nasa.gov/apod/image/1808/NGC6744_HaLRGB_MP.jpg";  //***
		let imgUrl26 = "https://apod.nasa.gov/apod/image/1808/TahaGhouchkanluTLE2018.jpg"; //***
		let imgUrl27 = "https://apod.nasa.gov/apod/image/1608/MeteorM31_hemmerich_1948.jpg"; //***
		let imgUrl28 = "https://apod.nasa.gov/apod/image/1808/PencilNebula_Perez_1553.jpg"; //***
		let imgUrl29 = "https://apod.nasa.gov/apod/image/1808/M86Eyes_Hanson_1143.jpg";  //***
		let imgUrl30 = "https://apod.nasa.gov/apod/image/1808/SolarProbeLaunch_Kraus_2048.jpg"; //*
		
		let imgUrl31 = "https://apod.nasa.gov/apod/image/1808/parkerlaunchperseids.apodDemeter.jpg"; //**
		let imgUrl32 = "https://apod.nasa.gov/apod/image/1808/2018_08_12_Bolid_Perseus_1600px.jpg"; //*
		let imgUrl33 = "https://apod.nasa.gov/apod/image/1808/PIA21923_fig1SeeingTitan2400.jpg"; //**
		let imgUrl34 = "https://apod.nasa.gov/apod/image/1808/asperatus_priester_1024.jpg"; //**
		let imgUrl35 = "https://apod.nasa.gov/apod/image/1808/SoulNebula_Vargas_3106.jpg"; //***
		let imgUrl36 = "https://apod.nasa.gov/apod/image/1808/Ryugu_Hayabusa2_1024.jpg"; //***
		let imgUrl37 = "https://apod.nasa.gov/apod/image/1808/21p-160818_85_santllop.jpg" //***
		let imgUrl38 = "https://apod.nasa.gov/apod/image/1808/M20M21Bobillo.jpg"; //****
		let imgUrl39 = "https://apod.nasa.gov/apod/image/1808/heic1404b1920.jpg"; //***
		let imgUrl40 = "https://apod.nasa.gov/apod/image/1808/fires_mccolgan_1731.jpg"; //***
		
		let imgUrl41 = "https://apod.nasa.gov/apod/image/1808/EclipseBalloon_Kuaray_1093.jpg"; //***
		let imgUrl42 = "https://apod.nasa.gov/apod/image/1808/MilkyWayOregon_Montoya_1500.jpg"; //***
		let imgUrl43 = "https://apod.nasa.gov/apod/image/1808/RSPup_HubbleBond_3981.jpg"; //***
		let imgUrl44 = "https://apod.nasa.gov/apod/image/1808/NGC6914_Eder.jpg"; //***
		let imgUrl45 = "https://apod.nasa.gov/apod/image/1808/m2018_08_06Adp.jpg"; //***
		let imgUrl46 = "https://apod.nasa.gov/apod/image/1809/atmosphere_geo5_2018235_eq2400.jpg"; //***
		let imgUrl47 = "https://apod.nasa.gov/apod/image/1809/SaturnAurora_Hubble_2215.jpg"; //***
		let imgUrl48 = "https://apod.nasa.gov/apod/image/1809/MoonPlume_Pace_4205.jpg"; //***
		let imgUrl49 = "https://apod.nasa.gov/apod/image/1809/NGC3628_GardnerRBA_2048.jpg"; //***
		let imgUrl50 = "https://apod.nasa.gov/apod/image/1809/Broom_Pickering_milne_APODw1200.jpg"; //***
		
		let imgUrl51 = "https://apod.nasa.gov/apod/image/1809/PIA17652SaturnHexagon.jpg";//***
        let imgUrl52 = "https://apod.nasa.gov/apod/image/1809/perseid11aug18-p.gif";
        let imgUrl53 = "https://apod.nasa.gov/apod/image/1809/CrabNebula_Hubble_3864.jpg";
        let imgUrl54 = "https://apod.nasa.gov/apod/image/1809/MilkyWayTongue_Merzlyakov_1790.jpg";
        let imgUrl55 = "https://apod.nasa.gov/apod/image/1809/Comet-21p-Giacobini-ZinnerX93.jpg";
        let imgUrl56 = "https://apod.nasa.gov/apod/image/1809/image1bedingfield.jpg";
        let imgUrl57 = "https://apod.nasa.gov/apod/image/1809/IMG_2086-2mauduit.jpg";
        let imgUrl58 = "https://apod.nasa.gov/apod/image/1809/filament_sdo_1080.jpg";
		let imgUrl59 = "https://apod.nasa.gov/apod/image/1809/Ring0644_HubbleChandra_3348.jpg";
        let imgUrl60 = "https://apod.nasa.gov/apod/image/1809/Cocoon_Drechsler_4000.jpg";
      
        let imgUrl61 = "https://apod.nasa.gov/apod/image/1809/NGC6727-drudis.jpg";
        let imgUrl62 = "https://apod.nasa.gov/apod/image/1809/NGC55_HaLRGBpugh.jpg";
        let imgUrl63 = "https://apod.nasa.gov/apod/image/1809/CurtainsofLightRohner.jpg";
        let imgUrl64 = "https://apod.nasa.gov/apod/image/1809/CallanishAnalemma_Petricca_1280.jpg";
        let imgUrl65 = "https://apod.nasa.gov/apod/image/1809/Ryugu01_Rover1aHayabusa2_960.jpg";
        let imgUrl66 = "https://apod.nasa.gov/apod/image/1809/AutumnSky_u2go_5000.jpg";
        let imgUrl67 = "https://apod.nasa.gov/apod/image/1809/sunspectrum_noao_3071.jpg";
        let imgUrl68 = "https://apod.nasa.gov/apod/image/1809/M33_15x480s_CDK14_D810A_ps13-ap.jpg";
        let imgUrl69 = "https://apod.nasa.gov/apod/image/1809/Sh2-155CaveNebula_Liampos.jpg";
        let imgUrl70 = "https://apod.nasa.gov/apod/image/1809/E0102NS_HubbleChandra_3985.jpg";
         
        let imgUrl71 = "https://apod.nasa.gov/apod/image/1810/bumper2_nasa_1500.jpg";
        let imgUrl72 = "https://apod.nasa.gov/apod/image/1810/SupernumeraryRainbows_Entwistle_1362.jpg";
        let imgUrl73 = "https://apod.nasa.gov/apod/image/1810/NGC1898_Hubble_2913.jpg";
        let imgUrl74 = "https://apod.nasa.gov/apod/image/1810/PIA22549_fig1.jpg";
        let imgUrl75 = "https://apod.nasa.gov/apod/image/1810/Venus_Radu-Mihai_MG_3429.jpg";
        let imgUrl76 = "https://apod.nasa.gov/apod/image/1810/AuroraFrogStalnacke3072.jpg";
        let imgUrl77 = "https://apod.nasa.gov/apod/image/1810/Comet21P_Hemmerich_1440.jpg";
        let imgUrl78 = "https://apod.nasa.gov/apod/image/1810/NGC1672_Hubble_3600.jpg";
        let imgUrl79 = "https://apod.nasa.gov/apod/image/1810/DSC_4229-Edit-2Falcon9Kraus2048.jpg";
        let imgUrl80 = "https://apod.nasa.gov/apod/image/1810/DSC08399-LrOut-Haidet2048.jpg";

        let imgUrl81 = "https://apod.nasa.gov/apod/image/1810/FuscoFalcon9SolanaBeachwRachelKona-2.jpg";
		let imgUrl82 = "https://apod.nasa.gov/apod/image/1810/OrionRedBlue_Lindemann_1500.jpg";
        let imgUrl83 = "https://apod.nasa.gov/apod/image/1810/M16_Klinger_3595.jpg";
        let imgUrl84 = "https://apod.nasa.gov/apod/image/1810/JupiterUV_HubbleSchmidt_1280.jpg";
        let imgUrl85 = "https://apod.nasa.gov/apod/image/1810/M015-2_Hubl.jpg";
        let imgUrl86 = "https://apod.nasa.gov/apod/image/1810/CTA_inauguratedSarahBrands.jpg";
        let imgUrl87 = "https://apod.nasa.gov/apod/image/1810/360_archDHan.jpg";
        let imgUrl88 = "https://apod.nasa.gov/apod/image/1810/NGC6543-BYU-L.jpg";
        let imgUrl89 = "https://apod.nasa.gov/apod/image/1810/CometMeteorNebula_TSam_5310.jpg";


		let urlarr = [
            imgUrl52,imgUrl1,imgUrl2,imgUrl3,imgUrl4,imgUrl5,imgUrl6,imgUrl7,imgUrl8,imgUrl9,imgUrl10,
			imgUrl11,imgUrl12,imgUrl13,imgUrl14,imgUrl15,imgUrl16,imgUrl17,imgUrl18,imgUrl19,imgUrl20,
			imgUrl23,imgUrl24,imgUrl25,imgUrl26,imgUrl27,imgUrl28,imgUrl29,imgUrl30,imgUrl31,imgUrl32,
			imgUrl33,imgUrl35,imgUrl36,imgUrl37,imgUrl38,imgUrl39,imgUrl40,imgUrl41,imgUrl42,imgUrl43,
			imgUrl44,imgUrl45,imgUrl46,imgUrl47,imgUrl48,imgUrl49,imgUrl50,imgUrl51,imgUrl53,imgUrl54,
			imgUrl21,imgUrl34,imgUrl55,imgUrl56,imgUrl57,imgUrl58,imgUrl59,imgUrl60,imgUrl61,imgUrl62,
			imgUrl63,imgUrl64,imgUrl65,imgUrl66,imgUrl67,imgUrl68,imgUrl69,imgUrl70,imgUrl71,imgUrl72,
			imgUrl73,imgUrl74,imgUrl75,imgUrl76,imgUrl77,imgUrl78,imgUrl79,imgUrl80,imgUrl81,imgUrl82,
			imgUrl83,imgUrl84,imgUrl85,imgUrl86,imgUrl87,imgUrl88,imgUrl89

		];

		$("body").on("dblclick",function() {
			$(this).css({"background-image" : "none"});
			$("#displaydiv").show();
		})
		
		$("<a>").attr({id:"return",title:"返回首頁"})
        .text("\u21B6").appendTo('body');
        $("<br>").appendTo('body');

        $("#return").on("click",function() {
        $(this).attr("href","/")
         })




		$("<div>").attr("id","displaydiv").appendTo("body");
		let displaydiv = $("#displaydiv");

		$('#displaydiv').on("dblclick",".img",function(e) {
                e.stopPropagation();
				let backgroundimage = $(this).attr("src");

				console.log("url",backgroundimage)
				$("#displaydiv").hide();
				let url = "url("  + backgroundimage + ")";
				console.log("bckgrdimg ",url)
				$("body").css({"background-image" : url, height: 940});
			})

		displayimg(urlarr);

		function displayimgPromised() {
			let promisearr = urlarr.map(getimg);
			let sequence = Promise.resolve();
			promisearr.forEach(function(curpromise) {
				sequence.then(function() {
					return curpromise;
				})
				.then(function(url) {
					$("<img>").attr({src: url, class:"img"}).css({width:200,height:200,marginLeft:10,marginTop:10}).appendTo(displaydiv);
				})
				.catch(function(err) {
					console.log("error")
				})

			})
		}

		function getimg(url) {
			return new Promise(function(resolve,reject) {
				var img = new Image();
				img.onload = function() {
					resolve(url)
				}
				img.onerror = function() {
					reject(url)
				}
				img.src = url;
			})
		}
		
		function displayimg(urlarr) {
			let targeturl = urlarr.shift();
			if (targeturl) {
				getimg(targeturl)
				.then(function(url) {
					$("<img>").attr("src",url).css({width:200,height:200,marginLeft:10,marginTop:10}).appendTo(displaydiv);
					displayimg(urlarr);
				})
				.catch(function(urlarr) {
					console.log("error")
				})
			}
		}
   })

