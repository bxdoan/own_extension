async function fetchData() {
    const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    console.log(record);
    let firstData = record.data[0]
    document.getElementById("date").innerHTML=firstData.date;
    document.getElementById("areaName").innerHTML=firstData.areaName;
    document.getElementById("latestBy").innerHTML=firstData.latestBy;
    document.getElementById("deathNew").innerHTML= `new ${firstData.deathNew} / ${firstData.death}`;
}

fetchData();