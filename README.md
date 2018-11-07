# Aux Quatre Coins De Paris

## basic md format
@see https://help.github.com/articles/basic-writing-and-formatting-syntax/


## shortcodes
pieces of code to include in content files\
`{{< my-shortcode >}}` for regular shortcodes\
`{{% my-shortcode %}}` for shortcodes with markdown

### Big blue sketch text
```
{{< big-blue-text align="center" >}}content{{< /big-blue-text >}}
```
create big blue text with Cabin Sketch font\
* **align="center"**: facultative parameter, center the text\
* **content**: to replace with content of the text

### yellow button
```
{{< button-light URL="/fr/se-promener/" />}}
```
**URL="{URL}"**: replace {URL} by the link to the target page

### blue button
```
{{< button-sky URL="/fr/se-promener/" />}}
```
**URL="{URL}"**: @see yellow button

### Tips with icons above
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

### image buttons
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
**{{< tiles-list >}}**: optional, surround the buttons to obtain two columns (may contain image-button, buttons, articles)
* add attribute **spaceAround="true"** to tiles-list to add space around inner elements
**{{< image-button title="{title}" image="{image-URL}" link="{URL}" >}}**: button with image behind
* replace **{title}** with the text to show above button
* replace **{image-URL}** with the URL of the image shown behind
* replace **{URL}** with the URL of the targeed page

### Icons
You can add an icon anywhere in youre texte with this shortcode. (@see fontawesome doc)
```
{{< icon name="envelope" >}}
```

### Text with blue background
Text area with blue background
```
{{< blue-background >}} Text {{< /blue-background >}}
```


## front matter
These are the parameters set on top of each content file

### slug
Changes the path of the current page

### bottomButtons
Set to true, show the buttons on the bottom of end pages


## todo:

* change meta description with pages
* correct lang in manifest
* create required icons
* optimize remaining images
* check IE
* use .GitInfo.Hash as cache key for service worker
* defer offscreen images