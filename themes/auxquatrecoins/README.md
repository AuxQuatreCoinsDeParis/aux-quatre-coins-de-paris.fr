# basic md format
@see https://help.github.com/articles/basic-writing-and-formatting-syntax/

# shortcodes
pieces of code to include in content files

## title-main
```
{{< title-main level="1" align="center" >}}content{{< /title-main >}}
```
create big blue title with Cabin Sketch font\
**level="1"**: facultative parameter, choose the level of the title (1 to 5)\
**align="center"**: facultative parameter, center the text\
**content**: to replace with content of the title

## yellow button
```
{{< button-light URL="/fr/se-promener/" />}}
```
**URL="{URL}"**: replace {URL} by the link to the target page

## blue button
```
{{< button-sky URL="/fr/se-promener/" />}}
```
**URL="{URL}"**: @see yellow button

## Tips with icons above
```
{{< list-icon >}}
  {{< list-icon-item icon="edit">}}Conseils sur mesure pour organiser votre séjour{{< /list-icon-item >}}
  {{< list-icon-item icon="comments">}}Accueil en personne le jour de votre arrivée{{< /list-icon-item >}}
  {{< list-icon-item icon="camera-retro">}}Promenades privées pour découvrir un Paris authentique{{< /list-icon-item >}}
{{< /list-icon >}}
```
**{{< list-icon >}}**: mandatory, must surround the `list-icon-item` blocs
**{{< list-icon-item icon="comments">}}content{{< /list-icon-item >}}**: bloc with icon and content
  * **icon="{name of icon}"**: Icon placed over the text. @See the [fontawesome doc](https://fontawesome.com/icons?d=gallery&s=solid&m=free) to change it
  * **content**: text under the icon

## image buttons
There are two ways of using it : alone, it will occupy the width of the page, inside a list, there will be two of them by line.
```
{{< tiles-list >}}
  {{< image-button title="Paris en amoureux"
      image="/what-we-do/Paris-in-love-1024x683.jpeg"
      link="#" >}}
  {{< image-button title="Paris en famille"
      image="/what-we-do/Family-Paris-1024x683.jpeg"
      link="#" >}}
{{< /tiles-list >}}
```
**{{< tiles-list >}}**: optional, surround the buttons to obtain two columns
**{{< image-button title="{title}" image="{image-URL}" link="{URL}" >}}**: button with image behind
 * replace **{title}** with the text to show above button
 * replace **{image-URL}** with the URL of the image shown behind
 * replace **{URL}** with the URL of the targeed page

# todo:

* change title with pages