class TabItem {
  constructor(element, parent) {
    // attach dom element to object. Example in Tabs class
	this.element = element;
	//this.link = parent;
	this.tabs = parent;	
  }

  select() {
    // should use classList
	this.element.classList.add("Tabs__item-selected");
  }

  deselect() {
    // should use classList
	this.element.classList.remove("Tabs__item-selected");
  }
}

class TabLink {
  constructor(element, parent) {
	this.element = element;
	this.tabs = parent;
	this.tabItem = new TabItem(this.tabs.getTab(this.element.getAttribute(`data-tab`)));
    //this.tabItem = this.tabs.getTab(this.element.dataset.tab);
	this.element.addEventListener('click', () => {
		this.tabs.updateActive(this);
		this.select();
	});
  };

  select() {
    // select this link
	this.element.classList.add('Tabs__link-selected');
    // select the associated tab
	this.tabItem.select();
  }

  deselect() {
    // deselect this link:
	this.element.classList.remove('Tabs__link-selected');
    // deselect the associated tab
	this.tabItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
    this.activeLink = this.links[0];
    
	this.chkTabs = function () {
	let i = 0;
	const l = tabs.length;
		for (; i < l; i++) {
			if (tabs[i].onmouseover) { alert('over!'); }
		}
	};
	
	this.init();
  }

  init() {
    // select the first link and tab upon ititialization
	this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
	this.activeLink.deselect();
	this.activeLink = newActive;
  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
	return this.element.querySelector(`.Tabs__item[data-tab='${data}']`);
  }

}

let tabs = document.querySelectorAll('.Tabs');
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
//document.getElementsByClassName("Tabs__link").item(0).onmouseover = alert('mouseover');
