'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Vent2uProject documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' : 'data-target="#xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' :
                                            'id="xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnergyPageModule.html" data-type="entity-link" >EnergyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnergyPageModule-fc1d41e2e3615f89892186137faf7e6d7305f9e2a6fba5db58eeb1549e5e3104c48c749010400f557ea205d4b5d0cb11fbd88d5cbebd9ebbb3ce285e1d340a58"' : 'data-target="#xs-components-links-module-EnergyPageModule-fc1d41e2e3615f89892186137faf7e6d7305f9e2a6fba5db58eeb1549e5e3104c48c749010400f557ea205d4b5d0cb11fbd88d5cbebd9ebbb3ce285e1d340a58"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnergyPageModule-fc1d41e2e3615f89892186137faf7e6d7305f9e2a6fba5db58eeb1549e5e3104c48c749010400f557ea205d4b5d0cb11fbd88d5cbebd9ebbb3ce285e1d340a58"' :
                                            'id="xs-components-links-module-EnergyPageModule-fc1d41e2e3615f89892186137faf7e6d7305f9e2a6fba5db58eeb1549e5e3104c48c749010400f557ea205d4b5d0cb11fbd88d5cbebd9ebbb3ce285e1d340a58"' }>
                                            <li class="link">
                                                <a href="components/EnergyPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnergyPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnergyPageRoutingModule.html" data-type="entity-link" >EnergyPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GenderPageModule.html" data-type="entity-link" >GenderPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GenderPageModule-57b06ddc3cb408d329a34749b3df62f20f8c8bf243761f0c99949a650d2a7dc2186642b8cf8cf2c02a8c532d69e5287c6f2b7bbd24f222bc3b571da258b7c1c8"' : 'data-target="#xs-components-links-module-GenderPageModule-57b06ddc3cb408d329a34749b3df62f20f8c8bf243761f0c99949a650d2a7dc2186642b8cf8cf2c02a8c532d69e5287c6f2b7bbd24f222bc3b571da258b7c1c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GenderPageModule-57b06ddc3cb408d329a34749b3df62f20f8c8bf243761f0c99949a650d2a7dc2186642b8cf8cf2c02a8c532d69e5287c6f2b7bbd24f222bc3b571da258b7c1c8"' :
                                            'id="xs-components-links-module-GenderPageModule-57b06ddc3cb408d329a34749b3df62f20f8c8bf243761f0c99949a650d2a7dc2186642b8cf8cf2c02a8c532d69e5287c6f2b7bbd24f222bc3b571da258b7c1c8"' }>
                                            <li class="link">
                                                <a href="components/GenderPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenderPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenderPageRoutingModule.html" data-type="entity-link" >GenderPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-a622f51e2915ea3e16fc40a842960d1ca845304d39c14600bcf0ba297c8ed8eb6d6d1843422f45b5c1895d7cb2f13cceb8431061bc8ce9d7f63a78dd447f56e4"' : 'data-target="#xs-components-links-module-HomePageModule-a622f51e2915ea3e16fc40a842960d1ca845304d39c14600bcf0ba297c8ed8eb6d6d1843422f45b5c1895d7cb2f13cceb8431061bc8ce9d7f63a78dd447f56e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-a622f51e2915ea3e16fc40a842960d1ca845304d39c14600bcf0ba297c8ed8eb6d6d1843422f45b5c1895d7cb2f13cceb8431061bc8ce9d7f63a78dd447f56e4"' :
                                            'id="xs-components-links-module-HomePageModule-a622f51e2915ea3e16fc40a842960d1ca845304d39c14600bcf0ba297c8ed8eb6d6d1843422f45b5c1895d7cb2f13cceb8431061bc8ce9d7f63a78dd447f56e4"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HumidityPageModule.html" data-type="entity-link" >HumidityPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HumidityPageModule-cee94c9269ebf8ffc389b5ee59fcaa6807cab464049939a63fef7d63fb98314e2f3ee8ccd04387954cd49c312898f475cad0ddb3cbc7f742b29c8811441d999f"' : 'data-target="#xs-components-links-module-HumidityPageModule-cee94c9269ebf8ffc389b5ee59fcaa6807cab464049939a63fef7d63fb98314e2f3ee8ccd04387954cd49c312898f475cad0ddb3cbc7f742b29c8811441d999f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HumidityPageModule-cee94c9269ebf8ffc389b5ee59fcaa6807cab464049939a63fef7d63fb98314e2f3ee8ccd04387954cd49c312898f475cad0ddb3cbc7f742b29c8811441d999f"' :
                                            'id="xs-components-links-module-HumidityPageModule-cee94c9269ebf8ffc389b5ee59fcaa6807cab464049939a63fef7d63fb98314e2f3ee8ccd04387954cd49c312898f475cad0ddb3cbc7f742b29c8811441d999f"' }>
                                            <li class="link">
                                                <a href="components/HumidityPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HumidityPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HumidityPageRoutingModule.html" data-type="entity-link" >HumidityPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemperaturePageModule.html" data-type="entity-link" >TemperaturePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemperaturePageModule-0ceea39c6ae27a613d14c544c25074f6ebdf867b5f23cd1c1c2addc31ee562d5d6e5395ba6e8e1725ea8fcdc78c752e2f10b47ac189068730b6de98f3de21ab2"' : 'data-target="#xs-components-links-module-TemperaturePageModule-0ceea39c6ae27a613d14c544c25074f6ebdf867b5f23cd1c1c2addc31ee562d5d6e5395ba6e8e1725ea8fcdc78c752e2f10b47ac189068730b6de98f3de21ab2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemperaturePageModule-0ceea39c6ae27a613d14c544c25074f6ebdf867b5f23cd1c1c2addc31ee562d5d6e5395ba6e8e1725ea8fcdc78c752e2f10b47ac189068730b6de98f3de21ab2"' :
                                            'id="xs-components-links-module-TemperaturePageModule-0ceea39c6ae27a613d14c544c25074f6ebdf867b5f23cd1c1c2addc31ee562d5d6e5395ba6e8e1725ea8fcdc78c752e2f10b47ac189068730b6de98f3de21ab2"' }>
                                            <li class="link">
                                                <a href="components/TemperaturePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemperaturePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemperaturePageRoutingModule.html" data-type="entity-link" >TemperaturePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThankYouPageModule.html" data-type="entity-link" >ThankYouPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThankYouPageModule-5740f9fca6b5cfa58ca1e553f14e9776872925984852b2cc4262166fbba603b5d443ec12a3682a6918e5714011570176008e8c1755ace42398247758c6ca1b37"' : 'data-target="#xs-components-links-module-ThankYouPageModule-5740f9fca6b5cfa58ca1e553f14e9776872925984852b2cc4262166fbba603b5d443ec12a3682a6918e5714011570176008e8c1755ace42398247758c6ca1b37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThankYouPageModule-5740f9fca6b5cfa58ca1e553f14e9776872925984852b2cc4262166fbba603b5d443ec12a3682a6918e5714011570176008e8c1755ace42398247758c6ca1b37"' :
                                            'id="xs-components-links-module-ThankYouPageModule-5740f9fca6b5cfa58ca1e553f14e9776872925984852b2cc4262166fbba603b5d443ec12a3682a6918e5714011570176008e8c1755ace42398247758c6ca1b37"' }>
                                            <li class="link">
                                                <a href="components/ThankYouPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThankYouPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThankYouPageRoutingModule.html" data-type="entity-link" >ThankYouPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});