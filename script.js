// Mobile Menu Toggle
const menuBtn = document.getElementById( 'menu-btn' );
const mobileMenu = document.getElementById( 'mobile-menu' );
let menuOpen = false;

menuBtn.addEventListener( "click", () =>
{
    menuOpen = !menuOpen;
    // Animate hamburger to X
    menuBtn.classList.toggle( "open" );
    menuBtn.querySelector( "path" ).setAttribute( "d", menuOpen
        ? "M6 18L18 6M6 6l12 12"  // X shape
        : "M4 6h16M4 12h16M4 18h16" // Hamburger
    );
    // Slide down mobile menu
    setTimeout( () =>
    {


        if ( menuOpen ) {
            mobileMenu.classList.add( 'open' );
        } else {
            mobileMenu.classList.remove( 'open' );
        }

    }, 100 );
} );

// Search toggle
const searchBtn = document.getElementById( "search-btn" );
const searchBar = document.getElementById( "search-bar" );
const cancelSearch = document.getElementById( "cancel-search" );

searchBtn.addEventListener( "click", () =>
{
    searchBar.classList.remove( "hidden" );
} );

cancelSearch.addEventListener( "click", () =>
{
    searchBar.classList.add( "hidden" );
} );
