(function() {
    var t = [].indexOf || function(t) {
        for (var a = 0, i = this.length; a < i; a++) if (a in this && this[a] === t) return a;
        return -1;
    };
    (function() {
        function a(t, a, i) {
            this.id_name = t, this.margin = i, this.id = "#" + this.id_name, d3.select(a).append("div").attr("id", this.id_name).attr("class", "tooltip tooltip_main").attr("visibility", "hidden"), 
            $(this.id).css("width", this.margin.width), this.hide();
        }
        a.prototype.SOFTWARE_ICONS_ARRAY = [ "r" ], a.prototype.SOFTWARE_ICONS_PATH = "graphics/", 
        a.prototype.SHOW_ICONS = !0, a.prototype.LOGO_ICON_PATH = "graphics/logo_bq.png", 
        a.prototype.margin = null, a.prototype.id_name = null, a.prototype.id = null, a.prototype.show = function(t, a, i, r, e) {
            return this.createContent(a, i, r, e), $(this.id).css("zoom", this.margin.zoom), 
            this.updatePosition(t), $(this.id).show();
        }, a.prototype.hide = function() {
            return $(this.id).hide();
        }, a.prototype.createContent = function(a, i, r, e) {
            var o, s, n, p;
            return (o = d3.select(this.id).html("").style("background", i)).append("p").attr("class", "main").append("b").attr("class", "name_break").text(a.name), 
            o.append("hr").attr("class", "tooltip-hr"), this.addParagraph(o, a[e].toString().split(",").join(", "), "Cluster Name: "), 
            this.addParagraph(o, r[a[e]], "Elements in Cluster: "), o.append("hr").attr("class", "tooltip-hr"), 
            this.addParagraph(o, a.book, "Package title: "), o.append("hr").attr("class", "tooltip-hr"), 
            this.addParagraph(o, a.license, "License: "), this.addParagraph(o, a.version, "Version: "), 
            this.addParagraph(o, a.pub_date.substring(0, 7), "Publication Date: "), o.append("hr").attr("class", "tooltip-hr"), 
            this.addParagraph(o, a.TView.split(",").join(", "), "Task Views: "), this.addParagraph(o, a.TViewCount, "Number of Task Views: "), 
            o.append("hr").attr("class", "tooltip-hr"), p = a.software, "md" === a.software && (p = "readme.md"), 
            this.SHOW_ICONS && (n = a.software, t.call(this.SOFTWARE_ICONS_ARRAY, n) >= 0) ? (s = this.SOFTWARE_ICONS_PATH + p + ".gif", 
            this.createSoftwareIcon(o, s)) : this.addParagraph(o, p, "Software: "), this.createImgPreview(o, this.LOGO_ICON_PATH);
        }, a.prototype.addParagraph = function(t, a, i) {
            if (null != a && "" !== a) return t.append("p").attr("class", "main").text(i + a);
        }, a.prototype.updatePosition = function(t) {
            var a, i, r, e, o, s, n, p, h, d;
            return 20, 10, n = $(this.id).width(), s = $(this.id).height(), d = $(window).scrollTop(), 
            h = $(window).scrollLeft(), a = t.pageX, r = t.pageY, i = a, e = r, $.browser.mozilla || (a /= this.margin.zoom, 
            r /= this.margin.zoom), o = i < $(window).width() / 2 ? a - n - 40 : a + 20, o = Math.max(o, h + 20), 
            (p = e - d + 20 + s > $(window).height() ? r - s - 20 : r + 10) < d + 10 && (p = r + 10), 
            $(this.id).css("top", p).css("left", o);
        }, a.prototype.createSoftwareIcon = function(t, a) {
            var i;
            return (i = t.append("svg").attr("height", 20).attr("width", 100).style("display", "block").style("margin", "0 auto")).append("svg:text").attr("x", 10).attr("y", 15).style("font-size", "15px").text("Software: "), 
            i.append("svg:image").attr("xlink:href", a).attr("x", 80).attr("y", 2).attr("width", 16).attr("height", 16);
        }, a.prototype.createImgPreview = function(t, a) {
            return t.append("img").attr("width", 30).attr("src", a).attr("height", "auto").style("display", "block").style("margin", "10px auto 5px");
        };
    })();
}).call(this);