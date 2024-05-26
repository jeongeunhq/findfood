document.addEventListener("DOMContentLoaded", function() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.2635, 127.0286), // 경기대학교 수원캠퍼스 좌표
        level: 5 // 초기 확대 레벨 조정
    };
    var map;
    var marker;
    var infowindow;

    function loadKakaoMapScript() {
        return new Promise(function(resolve, reject) {
            if (typeof kakao !== "undefined" && typeof kakao.maps !== "undefined") {
                console.log("Kakao Maps API already loaded");
                resolve();
            } else {
                console.log("Loading Kakao Maps API script");
                var script = document.createElement("script");
                script.onload = function () {
                    console.log("Kakao Maps API script loaded successfully");
                    resolve();
                };
                script.onerror = function () {
                    console.error("Failed to load Kakao Maps API script");
                    reject(new Error("Failed to load Kakao Maps API"));
                };
                script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=4f4bd21bfdfe9e727a6540e7f7478334&libraries=services";
                document.head.appendChild(script);
            }
        });
    }

    function createMap() {
        console.log("Creating map with options:", mapOption);
        try {
            map = new kakao.maps.Map(mapContainer, mapOption); // mapContainer 사용
            map.setMinLevel(3);
            map.setMaxLevel(7);
            console.log("Map created successfully");
        } catch (error) {
            console.error("Failed to create map:", error);
        }
    }

    function callMapFunctions(name, address) {
        console.log("Calling map functions with address:", address);
        if (!map) {
            console.error("Map is not initialized");
            return;
        }

        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                console.log("Address search successful, coordinates:", coords);

                if (marker) {
                    marker.setMap(null);
                }
                if (infowindow) {
                    infowindow.close();
                }

                marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:100%;text-align:center;">' + name + '</div>'
                });
                infowindow.open(map, marker);

                map.setCenter(coords);
                map.setLevel(5);
            } else {
                console.error("Address search failed with status:", status);
            }
        });

        document.getElementById("map-container").classList.remove("invisible");
        document.body.style.overflow = "hidden";
    }

    function showMap(name, address) {
        console.log("Show map called with name and address:", name, address);
        loadKakaoMapScript()
            .then(function() {
                if (!map) {
                    createMap();
                }
                callMapFunctions(name, address);
            })
            .catch(function(error) {
                console.error("Error in showMap:", error);
            });
    }

    function closeMap() {
        console.log("Close map called");
        document.getElementById("map-container").classList.add("invisible");
        document.body.style.overflow = "visible";
    }
   
    window.showMap = showMap; // showMap 함수를 전역으로 노출
    if (document.getElementById("map-quit")) {
        document.getElementById("map-quit").addEventListener("click", closeMap);
    }
});
