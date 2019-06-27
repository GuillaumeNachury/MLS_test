### Extract script
used to grab params info from the http://re.jrc.ec.europa.eu/pvg_static/web_service.html website, and to populate `PV_GIS_constants.json`

```
const xport = [];
$0.querySelectorAll("tr").forEach(el => {
   const tmp = {};

    el.querySelectorAll('td').forEach((node, idx) => {
        if(idx == 0 ) {
            tmp.name= el.children[0].innerText;
        }
        else if(idx == 1) tmp.type = node.innerText;
        else if(idx == 2) tmp.required = node.innerText == 'Yes';
    })
    xport.push(tmp);
    
    })
    JSON.stringify(xport)
```