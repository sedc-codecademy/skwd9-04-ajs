class Band {
    constructor(name, active, tags, members, albums) {
        this.name = name;
        this.active = active;
        this.tags = tags;
        this.members = members;
        this.albums = albums;
    }

    getAlbumsAsString() {
        if (this.albums.length > 0) {
            return this.albums.join(", ");
        }
        return "";
    }

    getTagsAsString() {
        if (this.tags.length > 0) {
            return this.tags.join(", ");
        }
        return "";
    }

    getCurrentMembers() {
        if (this.members.length > 0) {
            return this.members.filter(member => !member.former);
        }
        return [];
    }

    getCurrentMembersAsString() {
        return this.getCurrentMembers().reduce((accumulator, currentValue) => accumulator + currentValue.name + ", ", "");
    }

    getAlbumsCount() {
        return this.albums ? this.albums.length : 0;
    }
}

class Memeber {
    constructor(name, former) {
        this.name = name;
        this.former = former;
    }
}

class Album {
    constructor(name, year, type) {
        this.name = name;
        this.year = year;
        this.type = type;
    }
}

let bands = [];

async function fetchData()
{
	return fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json')
	.then(response => response.json())
	.catch((error) => {
		console.log(error);
		bands = [];
	});
}

async function initLoad()
{
	let data = await fetchData();
	
    if (data && data.length) {
        bands = data.map(band => {
            let albums = band.albums.map(x => new Album(x.name, x.year, x.type));
            let members = band.members.map(x => new Memeber(x.name, x.former !== undefined ? x.former : false));
            return new Band(band.name, band.active, band.tags, members, albums);
        });
        console.log(bands)
    }

    showBands(bands);
}

initLoad();

function showBands(bands) {
    let tbody = document.getElementById("t-body");
    tbody.innerHTML = "";

    let html = "";
    let counter = 0;
    for (const band of bands) {
        counter++;
        //console.log(band.getCurrentMembers());
        html += `<tr>
            <td>${counter}</td>
            <td>${band.name}</td>
            <td><button disabled class="btn ${band.active ? "btn-warning" : "btn-danger"}">${band.active ? "Active" : "NotActive"}</button></td>
            <td>${band.getTagsAsString()}</td>
            <td>${band.getCurrentMembersAsString()}</td>
            <td>${band.getAlbumsCount()}</td>
        </tr>`  
    }
    tbody.innerHTML = html;
}