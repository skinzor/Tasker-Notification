// Deconstruct Info so that info may be used in Java Functions
function deconstruct(n) {
    n = JSON.parse(n);
    if(n.buttons) {
        n.buttons.forEach(function(b, i) { let j = i+1; setLocal("buttontask"+j, b.task); setLocal("buttonlabel"+j, b.label); setLocal("buttonicon"+j, b.icon); });
        setLocal("numbuttons", (n.buttons.length > 3) ? 3 : n.buttons.length);
    }
    if(n.style !== "none") {
        if(!n.bigtext)
            n.bigtext = n.text;
        if(!n.bigtitle)
            n.bigtitle = n.title;
        if(!n.bigsubtext && n.subtext)
            n.bigsubtext = n.subtext;
        if(n.style === "inbox") {
            n.inboxlines.forEach(function(l, i) { let j = i+1; setLocal("inboxline"+j, l); });
            setLocal("numinbox", (n.inboxlines.length > 5) ? 5 : n.inboxlines.length);
        }
    }
    Object.keys(n).forEach(function(k) { setLocal(k, n[k]); });
}

deconstruct(par[0]);