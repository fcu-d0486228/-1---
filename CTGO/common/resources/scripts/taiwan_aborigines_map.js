$(document).ready(function() {
    // load abo county data
    var data = $.ajax({
        url: "./resources/data/abo_county.json",
        type: "GET",
        dataType: "json",
        success: function(Jdata) {
            var aboCounty = {};
            // parse data
           
            $.each(Jdata, function (index, item) {
                aboCounty[item.county] = item.abo;
            });

            // map
            var svg = d3.select("svg")

            var projection = d3.geo.mercator()
                .center([121, 24])
                .scale(6000);

            var path = d3.geo.path()
                .projection(projection);

            d3.json("./resources/data/taiwan.json", function(error, topology) {
                var g = svg.append("g");
                
                // county boundary
                d3.select("svg").append("path").datum(
                    topojson.mesh(topology, topology.objects["County_MOI_1060525"],
                        function(a, b) {
                            return a !== b;
                        })).attr("d", path).attr("class", "county-boundary");

                d3.select("g").selectAll("path")
                    .data(topojson.feature(topology, topology.objects.County_MOI_1060525).features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr({
                        d: path,
                        name: function(d) {
                            return d.properties["COUNTYNAME"];
                        },
                        fill: '#fff',
                        stroke: "#d68a11"

                    }).attr('stroke-width', "2")
                    .on("mouseover", function(d) {
                        d3.select(this).attr("cursor", "pointer");
                        d3.select(this).attr("fill", "#FFD306");
                    })
                    .on("mouseleave", function(d) {
                        d3.select(this).attr("fill", "#fff");
                    })
                    .on("click", function(d) {
                        $('.abos').empty();
                        if (aboCounty[d.properties["COUNTYNAME"]]) {
                            $.each(aboCounty[d.properties["COUNTYNAME"]], function(index, element) {
                                var aboDataMap = $.ajax({
                                    url: "./resources/data/abo_data_map.json",
                                    type: "GET",
                                    dataType: "json",
                                    success: function(aboDataMapJson) {
                                        $.each(aboDataMapJson, function(dataIndex, dataEelement) {
                                            if (dataEelement.chinese == element) {
                                                console.log(dataEelement.totem);
                                                $('.abos').append('<div class="abo-item col-3 justify-content-center align-self-center"><img class="totem" src="' + dataEelement.totem + '"><span>' + element + '</span></div>');
                                            }
                                        });
                                    }, 
                                    error: function() {}
                                });
                            });
                        }
                    });
            });
        },
        error: function() {

        }
    });
});