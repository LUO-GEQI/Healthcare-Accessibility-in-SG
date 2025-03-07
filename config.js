var config = {
    style: 'mapbox://styles/1351007/cm7wswvom00ql01sd92ahe4nd',
    accessToken: 'pk.eyJ1IjoiMTM1MTAwNyIsImEiOiJjbTZ6N3R4bGswMmZpMnFyMWFhYzUxandwIn0.WbsfcTqNkscu4cuoRWCQAQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Healthier SG: How Accessible is Healthcare Infrastructures in Singapore?',
    subtitle: 'Mapping Healthcare Accessibility and Gaps from HDBs',
    byline: 'By LUO Geqi',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Healthcare Accessibility in Singapore',
            description: 'Healthcare access is essential for a healthy society, yet some communities face challenges reaching medical facilities. This map visualizes the 15-minute walking coverage of hospitals, clinics, and pharmacies.<br><br>By identifying healthcare deserts, we highlight areas needing better access, supporting policies for a more equitable healthcare distribution. <br><br><img src="images/legend1.png" style="height:100%;width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1                
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.3                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Healthcare Access from HDBs',
            description: 'This map visualizes the 15- and 20-minute walking accessibility of hospitals, clinics, and pharmacies from HDBs. Identifying areas with limited healthcare access helps improve medical service distribution and urban planning, ensuring that all residents have equitable healthcare opportunities.<br><br><img src="images/legend2.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.81519, 1.30446],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 0.8                
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.3                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 0.5               
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.3                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 1
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Healthcare Gaps | Yishun',
            description: 'This map highlights areas in Yishun where healthcare access is limited.Some HDBs in Yishun fall outside the 15-minute walking range of clinics and pharmacies, limiting access to essential healthcare services. This impacts residents, especially the elderly and vulnerable.<br><br>Identifying these gaps helps improve medical infrastructure, ensuring equitable healthcare access and better well-being for the community.<br><br><img src="images/legend3.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.83695, 1.42519],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1               
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.2                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1     
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.2            
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 1
                }
            ]
        },
        {
            id: 'FOURTH-container',
            alignment: 'middle',
            hidden: false,
            title: 'Building a Healthier, More Accessible Singapore',
            description: "Healthcare should be within everyone's reach. Identifying accessibility gaps is just the first step—<b>we need action</b>. Policymakers can improve infrastructure, and citizens can voice concerns or support local healthcare initiatives. Together, we can create a more equitable, healthier Singapore. <b>Your voice matters—let's make a change!</b>",            
            location: {
                center: [103.79304, 1.35969],
                zoom: 10,
                pitch: 0,
                bearing: 0
            
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1                
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.3                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Healthcare Infrastructure',
                    opacity: 1               
                },
                {
                    layer: 'Healthcare Coverage - 15-20 min',
                    opacity: 0.2                
                },
                {
                    layer: 'HDB outside Coverage',
                    opacity: 1
                }
            ],
        }
    ]
};