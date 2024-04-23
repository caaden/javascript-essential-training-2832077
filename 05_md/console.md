## Select an item by unique class ID, then assign a property:

document.querySelector(".backpack\_\_color").style.backgroundColor = 'grey'

-

## Change a className property:

document.querySelector(".backpack\_\_color").className="new_backpack_color"

-

## Change a className property using classList:

document.querySelector(".new_backpack_color").classList.replace("new_backpack_color","backpack\_\_color")

-

## Working with attributes

document.querySelector('img').getAttribute('src')
document.querySelector('img').setAttribute('junk','this-junk-att')
document.querySelector('img').removeAttribute('junk')
