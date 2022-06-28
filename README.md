# Web dev in HTML5 Review Notes
✨A bit review on HTML5 ✨by Stella Zhang✨06/23/2022✨
## About

<img align="right" width="200" height="183" src="https://cloud.githubusercontent.com/assets/532272/21507867/3376e9fe-cc4a-11e6-9350-7ec4f680da36.gif">

When I was reviewing html, my mentor Camdyn recommended me to refer to a very useful and thorough document on [whatwag](https://html.spec.whatwg.org/multipage/) as well as [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). 
Here are some notes that I made while making an html site for practice reasons.
## Acknowledgement
Most notes are stuff I find super important while browsing [whatwag](https://html.spec.whatwg.org/multipage/), and are 100% are quoted from the [whatwag](https://html.spec.whatwg.org/multipage/).
Some coding examples are from both Whatwag and [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
## Table of Contents
- [Basics](#basics)
- [Attributes](#attributes)
- [DOM Trees](#dom-trees)
- [Writing secure applications with HTML:](#writing-secure-applications-with-html)
    - [Basic Terminology](#basic-terminology)
    - [Parallelism](#parallelism)
    - [XML Compatibility](#xml-compatibility)
    - [DOM Trees](#dom-trees)
    - [Plugins:](#plugins)
    - [Parallelism](#parallelism)
    - [Character encodings](#character-encodings)
    - [Conformance Classes:](#conformance-classes)
    - [Common Microsyntaxes:](#common-microsyntaxes)
- [Common pitfalls to avoid when using the scripting APIs](#common-pitfalls-to-avoid-when-using-the-scripting-apis)
- [Common Infrastructures](#common-infrastructures)
- [Emurated attributes](#emurated-attributes)
- [HTML Elements](#html-elements)
- [HTML Input types](#html-input-types)
- [HTML Website notes after revision]()
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->

## Basics
HTML documents consist of a tree of elements and text. Each element is denoted in the source by a start tag, such as "<body>", and an end tag, such as "</body>". (Certain start tags and end tags can in certain cases be omitted and are implied by other tags.)

- Tags have to be nested such that elements are all completely within each other, without overlapping:
```bash
<p>This <em>is <strong>Stella</strong>.</em></p>
```

## Attributes
The elements can have attributes, which control how the elements work. 

```html
<a href="demo.html">Stella</a>
(Here, href is an attribute.)
```
Attributes are placed inside the start tag, and consist of a name and a value, separated by an "=" character. The attribute value can remain unquoted if it doesn't contain ASCII whitespace or any of " ' ` = < or >. Otherwise, it has to be quoted using either single or double quotes. The value, along with the "=" character, can be omitted altogether if the value is the empty string.
```html
<!-- empty attributes -->
<input name=stella disabled>
<input name=stella disabled="">

<!-- attributes with a value -->
<input name=stella maxlength=200>
<input name=stella maxlength='200'>
<input name=stella maxlength="200">
```
Afterwards, HTML user agents (e.g., web browsers) then parse this markup, turning it into a DOM (Document Object Model) tree. A DOM tree is an in-memory representation of a document.

## Dom Trees
DOM trees contain several kinds of nodes, in particular a DocumentType node, Element nodes, Text nodes, Comment nodes, and in some cases ProcessingInstruction nodes.
### Example of a DOM Tree:
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <title>Stella’s page</title>
 </head>
 <body>
  <h1>Here is Stella’s page</h1>
  <p>This is a <a href="demo.html">Stellar</a> page.</p>
  <!-- this is a comment -->
 </body>
</html>
DOCTYPE: html
  html lang="en"
      head
          #text: ⏎␣␣
          title
              #text: Stella’s page
          #text: ⏎␣
      #text: ⏎␣
      body
      #text: ⏎␣␣
      h1
        #text: Stella’s page
      #text: ⏎␣␣
      p
          #text: This is a
          a href="demo.html"
              #text: Stellar
          #text: page.
      #text: ⏎␣␣
      #comment: this is a comment
      #text: ⏎␣⏎

```
Document element of this tree: html element
Contains 2 elements: head and body; as well as a Text node between them. 

For instance, in our site: the head element contains a title element, which itself contains a Text node with the text “Stella’s landing page”.
What’s more, the body element contains an h1 element, a p element, and a comment.

This DOM tree can be manipulated from scripts in the page. Scripts (typically in JavaScript) are small programs that can be embedded using the script element or using event handler content attributes. For example, here is a form with a script that sets the value of the form's output element to say "Hello World":

```html
<form name="main">
 Result: <output name="result"></output>
 <script>
  document.forms.main.elements.result.value = 'Hello World';
 </script>
</form>
```

## Writing secure applications with HTML:
- Not validating user input
- Cross-site scripting (XSS)
- SQL injection
- Cross-site request forgery (CSRF)

If a site allows a user to make form submissions with user-specific side-effects, for example posting messages on a forum under the user's name, making purchases, or applying for a passport, it is important to verify that the request was made by the user intentionally, rather than by another site tricking the user into making the request unknowingly.
This problem exists because HTML forms can be submitted to other origins.
Sites can prevent such attacks by populating forms with user-specific hidden tokens, or by checking `Origin` headers on all requests.
- Clickjacking

A page that provides users with an interface to perform actions that the user might not wish to perform needs to be designed so as to avoid the possibility that users can be tricked into activating the interface.

- Common pitfalls to avoid when using the scripting APIs

## Common pitfalls to avoid when using the scripting APIs

- The use of presentational elements leads to poorer accessibility

While it is possible to use presentational markup in a way that provides users of assistive technologies (ATs) with an acceptable experience (e.g. using ARIA), doing so is significantly more difficult than doing so when using semantically-appropriate markup. Furthermore, even using such techniques doesn't help make pages accessible for non-AT non-graphical users, such as users of text-mode browsers.
Using media-independent markup, on the other hand, provides an easy way for documents to be authored in such a way that they work for more users (e.g. users of text browsers).
- Higher cost of maintenance

It is significantly easier to maintain a site written in such a way that the markup is style-independent. For example, changing the color of a site that uses <font color=""> throughout requires changes across the entire site, whereas a similar change to a site based on CSS can be done by changing a single file.
- Larger document sizes

Presentational markup tends to be much more redundant, and thus results in larger document sizes.
For those reasons, presentational markup has been removed from HTML in this version. 

## Common Infrastructures: 

### **Basic Terminology**
This specification depends on Infra. [INFRA]

In the context of the DOM structures, the terms HTML document and XML document are used as defined in DOM, and refer specifically to two different modes that Document objects can find themselves in. [DOM] (Such uses are always hyperlinked to their definition.)

In the context of byte streams, the term HTML document refers to resources labeled as text/html, and the term XML document refers to resources labeled with an XML MIME type.


If you have a `markdown.config.js` file where `markdown-magic` is invoked, it will automatically use that as the configuration unless otherwise specified by `--config` flag.

### **Parallelism**

To run steps in parallel means those steps are to be run, one after another, at the same time as other logic in the standard (e.g., at the same time as the event loop). This standard does not define the precise mechanism by which this is achieved, be it time-sharing cooperative multitasking, fibers, threads, processes, using different hyperthreads, cores, CPUs, machines, etc. By contrast, an operation that is to run immediately must interrupt the currently running task, run itself, and then resume the previously running task.


### **XML Compatibility** 
Attribute names are said to be XML-compatible if they match the Name production defined in XML and they contain no U+003A COLON characters (:). [XML]


### DOM Trees

**A node is inserted into a document** when the insertion steps are invoked with it as the argument and it is now in a document tree. 

Analogously, a node is **removed from a document** when the removing steps are invoked with it as the argument and it is now no longer in a document tree.

A node becomes **connected** when the insertion steps are invoked with it as the argument and it is now connected. Analogously, a node becomes disconnected when the removing steps are invoked with it as the argument and it is now no longer connected.

A node is **browsing-context connected** when it is connected and its shadow-including root's browsing context is non-null. A node becomes browsing-context connected when the insertion steps are invoked with it as the argument and it is now browsing-context connected. A node becomes browsing-context disconnected either when the removing steps are invoked with it as the argument and it is now no longer browsing-context connected, or when its shadow-including root's browsing context becomes null.

### **Plugins**:
The term plugin refers to an implementation-defined set of content handlers used by the user agent that can take part in the user agent's rendering of a Document object, but that neither act as child browsing contexts of the Document nor introduce any Node objects to the Document's DOM.
### **Character encodings:**
A character encoding, or just encoding where that is not ambiguous, is a defined way to convert between byte streams and Unicode strings, as defined in Encoding. An encoding has an encoding name and one or more encoding labels, referred to as the encoding's name and labels in the Encoding standard. [ENCODING]
### **Conformance Classes:**

### **Common Microsyntaxes:**
There are various places in HTML that accept particular data types, such as dates or numbers. This section describes what the conformance criteria for content in those formats is, and how to parse them.
Boolean Attributes:
Here is an example of a checkbox that is checked and disabled. The checked and disabled attributes are the boolean attributes.
```html
<label><input type=checkbox checked name=cheese disabled> Cheese</label>
```
This could be equivalently written as this:
```html
<label><input type=checkbox checked=checked name=cheese disabled=disabled> Cheese</label>
```
You can also mix styles; the following is still equivalent:
```html
<label><input type='checkbox' checked name=cheese disabled=""> Cheese</label>
```
## Emurated attributes
Some attributes, called enumerated attributes, take on a finite set of states. The state for such an attribute is derived by combining the attribute's value, a set of keyword/state mappings given in the specification of each attribute, and two possible special states that can also be given in the specification of the attribute. These special states are the invalid value default and the missing value default.

Every XML and HTML document in an HTML UA is represented by a Document object. `[DOM]`

The `Document` object's URL is defined in DOM. It is initially set when the Document object is created, but can change during the lifetime of the Document object; for example, it changes when the user navigates to a fragment on the page and when the pushState() method is called with a new URL. `[DOM]`

### Semantics, structure, and APIs of HTML documents

- Document object 

DOM defines a Document interface, which this specification extends significantly.

- Elements

Elements of HTML:
- Content model: A head element followed by a body element.
Tag omission in text/html: 
- An html element’s start tag can be omitted if the first thing inside the html element is not a comment.
- An html element’s end tag can be omitted if the html element is not immediately followed by a comment.

Semantic


Elements, attributes and attribute values in HTML are defined to have certain meanings (semantic). For example, the ol element represents an ordered list, and lang attribute represents the language of the content.

The nodes representing HTML elements in the DOM must implement, and expose to scripts, the interfaces listed for them in the relevant sections of this specification. This includes HTML elements in XML documents, even when those documents are in another context (e.g. inside an XSLT transform).

---

### > HTML Elements

**List of elements that I used in the html site:**
For this particular section, I will list the html element that I used in my site, and the example of how I used this element. Might be just a simple line of code for reference.

- `Head`:  
**Example:**  
```html
<head>
    <title>Stella's landing page</title>
</head>
```
---
- `title `  in a head element containing no other title elements, there must be no more than one title element per document.

  **Example:**  
```html
<head>
    <title>Stella's landing page</title>
</head>
``` 
----
- `base` the first base element with an href content attribute in a document tree has a frozen base URL. There could only be one single <base> element in a document, and it must be inside the <head> element. `href` attribute specifies the base URL for all relative URLs in the page, while the `target` attribute specifies the default target for all hyperlinks and forms in the page.



  **Example:**  
```html
<head>
    <title>Stella's landing page</title>
    <base href="https://www.example.com/news/index.html">
</head>
``` 
---
- `link`:
The <link> tag defines the relationship between the current document and an external resource. The <link> element is an empty element, it contains attributes only.

  **Example:**  
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
``` 
---
- `meta`: -The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements. Exactly one of the name, http-equiv, charset, and itemprop attributes must be specified.

**Global attributes**
- name — Metadata name
- http-equiv — Pragma directive
- content — Value of the element
- charset — Character encoding declaration
- media — Applicable media

  **Example:**  
```html
<meta charset="utf-8">
<meta name="keywords" content="PINT, Stella, Intern, Software dev">
``` 
---
- `body`: The body element exposes as event handler content attributes a number of the event handlers of the Window object. It also mirrors their event handler IDL attributes.
```html
<body>
  <meta charset="utf-8">
  <meta name="keywords" content="PINT, Stella, Intern, Software dev">
</body>
``` 
---
- `article`: The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

  **Example:**  
```html
  <article>
    <header>
        <h1 itemprop="headline">A blog on my interest in Computer Science</h1>
    </header>
    <p>My interest mostly span the field of the above three.</p>
    <section>
     <h1>1) Theoretical Computer Science</h1>
     <p>Algorithm, Complexity Theory, Cryptography, Learning theory, Graph Theory, Algebraic Combinatorics, Functional Programming, Category Theory.</p>
    </section>
    <section>
     <h1>2) Software Engineering</h1>
     <p>Web Development, Distributed System, Mobile Application Development.</p>
    </section>
    <footer>
        <a itemprop="discussionUrl" href="?comments=1">Show comments...</a>
    </footer>
   </article>
```
---
- `section`:  Defines a section in html document
  **Example:**  
```html
 <section>
     <h1>1) Theoretical Computer Science</h1>
     <p>Algorithm, Complexity Theory, Cryptography, Learning theory, Graph Theory, Algebraic Combinatorics, Functional Programming, Category Theory.</p>
 </section>
```
---
- `hgroup`: The hgroup element represents the heading of a section, which consists of all the h1–h6 element children of the hgroup element. The element is used to group a set of h1–h6 elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.

  **Example:**  

```html
      <hgroup>
        <h1>This is very nice for no reasons</h1>
            <section>
            <h1>Diving in</h1>
            </section>
            <section>
            <h1>Simple shapes</h1>
            </section>
            <section>
            <h2>Canvas coordinates</h2>
            </section>
      </hgroup>
```
---
- `nav`:
The <nav> tag defines a set of navigation links.
Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.
  **Example:**  

```html
      <nav>
        <h1>Folders</h1>
        <ul>
         <li> <a href="/inbox" onclick="return openFolder(this.href)">Inbox</a> <span class=count></span>
         <li> <a href="/sent" onclick="return openFolder(this.href)">Sent</a>
         <li> <a href="/drafts" onclick="return openFolder(this.href)">Drafts</a>
         <li> <a href="/trash" onclick="return openFolder(this.href)">Trash</a>
         <li> <a href="/customers" onclick="return openFolder(this.href)">Customers</a>
        </ul>
      </nav>
``` 
---
- `footer`: 
You can have several <footer> elements in one document. **Tip:** Contact information inside a <footer> element should go inside an <address> tag.

**Example:** 
```html
    <footer>
        <a itemprop="discussionUrl" href="?comments=1">Show comments...</a>
    </footer>
```
---
- `span`: The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.

  **Example:**  

```htmL
        <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span>
```
---
-`Summary`: The <summary> tag defines a visible heading for the element. The heading can be clicked to view/hide the details.
```html
        <details>
          <summary>TellaZ</summary>
          <p>TellaZ stands for Stella Zhang.</p>
        </details>
```
---
**Example:**

- ` h1, h2, h3, h4, h5, and h6`: These elements have a rank given by the number in their name. The h1 element is said to have the highest rank, the h6 element has the lowest rank, and two elements with the same name have equal rank.

  **Example:**  

```html
  <hgroup>
     <h1>1) Theoretical Computer Science</h3>
     <h2>2) Software Engineering</h3>
     <h3>3) Product Managemnet</h3>
  </hgroup>
```
---
- `address`: 
The <address> tag defines the contact information for the author/owner of a document or an article.
The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element.

  **Example:**  

```html
    <address>
      For more details, contact
      <a href="mailto:js@example.com">John Smith</a>.
    </address>
```
---
- `aside`: The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

  **Example:**  

```html
            <aside>
                <ins datetime="2005-03-16 00:00Z">
                 <p> I like fruit. </p>
                </ins>
                <ins datetime="2005-03-16 00:00Z">
                 Apples are <em>tasty</em>.
                </ins>
                <ins datetime="2007-12-19 00:00Z">
                 So are pears.
                </ins>
            </aside>
```
---
## The followings are Grouping content elements:

- `p`: The p element represents a paragraph.

  **Example:**  

```html
  <p> I like fruit. </p>
```
---
- `hr`: The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.


```html
  <p> I like fruit. </p>
  <hr>
  <p> I like vegetables. </p>
```
---
- `pre`: The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.

  **Example:**  

```html
        <pre><code class="language-pascal">var i: Integer;
                                begin
                                   i := 1;
                                end.</code>
        </pre>
        <pre><samp>You are in an open field west of a big white house with a boarded
          front door.
          There is a small mailbox here.
          ></samp> <kbd>open mailbox</kbd>
          <samp>Opening the mailbox reveals:
          A leaflet.
        ></samp></pre>
```
---
- `blockquote`:  The blockquote element represents a section that is quoted from another source.

  **Example:**  

```html
        <blockquote lang="en-GB">
                <p>Look around and you will find, no-one's really
                <mark>colour</mark> blind.</p>
        </blockquote>
```
---
- `ol`:  The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.

  **Example:**  

```html
        <ol>
            <li>Switzerland
            <li>United Kingdom
            <li>United States
            <li>Norway
        </ol>
```
---
- `ul`: The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document. Difference between ol and ul is that ol will make 1,2,3,4,... to record, and ul will just use dots in front of each items.

  **Example:**  

```html
   <ul>
      <li>wizards,
      <li>faster-than-light travel, and
      <li>telepathy,
   </ul>
```
---
- `menu`:
The menu element represents a toolbar consisting of its contents, in the form of an unordered list of items (represented by li elements), each of which represents a command that the user can perform or activate.

  **Example:**  
```html
  <menu>
    <li><button onclick="copy()"><img src="copy.svg" alt="Copy"></button></li>
    <li><button onclick="cut()"><img src="cut.svg" alt="Cut"></button></li>
    <li><button onclick="paste()"><img src="paste.svg" alt="Paste"></button></li>
  </menu>
``` 
---

- `li`:
The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.

  **Example:**  
```html
     <li>wizards,
     <li>faster-than-light travel, and
     <li>telepathy,
``` 
---
- `dt`:

  **Example:**  
```html
 <dt>Radius: <dd> <meter min=0 max=20 value=12 title="centimeters">12cm</meter>
``` 
---
- `dd`:

  **Example:**  
```html
    <dt>Height: <dd> <meter min=0 max=10 value=2 title="centimeters">2cm</meter>
``` 
---
- `figure`:
Figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
  **Example:**  
```html
    <figure id="l4">
     <pre><code>interface PrimaryCore {
     boolean verifyDataLine();
     undefined sendData(sequence&lt;byte> data);
     undefined initSelfDestruct();
    }</code></pre>
    </figure>
``` 
---
- `figcaption`:
The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.

  **Example:**  
```html
    <figure id="l4">
      <figcaption>Listing 4. The primary core interface API declaration.</figcaption>
      <pre><code>interface PrimaryCore {
      boolean verifyDataLine();
      undefined sendData(sequence&lt;byte> data);
      undefined initSelfDestruct();
      }</code></pre>
    </figure>
``` 
---
- `main`:
The main element represents the dominant contents of the document.

  **Example:**  
```html
    <main>
      ....
    </main>
``` 
---
- `div`:
 The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements. It can also be used in a dl element, wrapping groups of dt and dd elements.
  **Example:**  
```html
<div>
  <p>Hiiiiiiiiiiiiiiiiiiiiiiii this is a random note
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
``` 
## The following elements are Text-level semantics
---
- `a`:
If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents. If the a element has no href attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.

  **Example:**  
```html
 <a href="/group/mozilla.dev.general/subscribe">join</a></p>
``` 
---
- `em`:
The em element represents stress emphasis of its contents.

  **Example:**  
```html
<p>Get out of bed <em>now</em>!</p>
``` 
---
- `strong`:
The strong element represents strong importance, seriousness, or urgency for its contents.

  **Example:**  
```html
    <p><strong>Now selling for just $2.99 a bottle!</strong></p>
``` 
---
- `small`:
The small element represents side comments such as small print.

  **Example:**  
```html
    <p><small>© copyright 2038 Example Corp.</small></p>
``` 
---

- `cite`:
The cite element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, a computer program, etc.). This can be a work that is being quoted or referenced in detail (i.e., a citation), or it can just be a work that is mentioned in passing.

  **Example:**  
```html
  <p><cite>Universal Declaration of Human Rights</cite>, United Nations,
            December 1948. Adopted by General Assembly resolution 217 A (III).
  </p>
``` 
---
- ` q`:
The q element represents some phrasing content quoted from another source.
  **Example:**  
```html
  <p>The man said 
    <q>Things that are impossible just takes longer</q>. I disagreed with him.
  </p>
``` 
---
- `s`:
 The s element represents contents that are no longer accurate or no longer relevant.
  **Example:**  
```html
    <p>Buy our Iced Tea and Lemonade!</p>
    <p><s>Recommended retail price: $3.99 per bottle</s></p>
    <p><strong>Now selling for just $2.99 a bottle!</strong></p>
``` 
---
- `dfn`:
The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.

  **Example:**  
```html

        <p>
          The <dfn id=whatwg><abbr
                        title="Web Hypertext Application Technology Working Group">WHATWG</abbr></dfn>
                        is a loose unofficial collaboration of web browser manufacturers and
                        interested parties who wish to develop new technologies designed to
                        allow authors to write and deploy Applications over the World Wide
                        Web.
        </p>
``` 
---
- `abbr`:
The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.

  **Example:**  
```html
      <p>The <dfn><abbr title="Garage Door Opener">GDO</abbr></dfn>
``` 
---
- `ruby`:
The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana.

  **Example:**  
```html
  <ruby>漢<rt>ㄏㄢˋ</rt>字<rt>ㄗˋ</rt></ruby>
                        ...<ruby>汉<rt>hàn</rt>字<rt>zì</rt></ruby>...
``` 
---
- `rt`:
The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but the ruby element uses it as part of determining what it represents.

  **Example:**  
```html
        <ruby>漢<rp>（</rp><rt>かん</rt><rp>）</rp>字<rp>（</rp><rt>じ</rt><rp>）</rp></ruby>
``` 
---
- `rp`:
The rp element can be used to provide parentheses or other content around a ruby text component of a ruby annotation, to be shown by user agents that don't support ruby annotations.

  **Example:**  
```html
        <ruby>漢<rp>（</rp><rt>かん</rt><rp>）</rp>字<rp>（</rp><rt>じ</rt><rp>）</rp></ruby>
``` 
---
- `data`:
 The data element represents its contents, along with a machine-readable form of those contents in the value attribute.

  **Example:**  
```html
        <tr> <td> 1830 <td> <data value="8">Eight</data> <td> <data value="93">19+74 hexes (93 total)</data>
``` 
---
- `time`:
 The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.

  **Example:**  
```html
        <time>2022-06</time>
``` 
---
- `code`:
The code element represents a fragment of computer code. This could be an XML element name, a filename, a computer program, or any other string that a computer would recognize.

  **Example:**  
```html
            <code class="language-java">
              int count = 0;
              for(int i = 0; i < 8; i++){
                count ++;
              }
              return count;
            </code>
``` 
---
- `var`:
The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.

  **Example:**  
```html
  <p>Then she turned to the blackboard and picked up the chalk. After a few moment's
        thought, she wrote <var>E</var> = <var>m</var> <var>c</var><sup>2</sup>. The teacher
        looked pleased.
  </p>
``` 
---
- `samp`:
The samp element represents sample or quoted output from another program or computing system.

  **Example:**  
```html
     <p>The computer said <samp>Too much cheese in tray two</samp> but I didn't know what that meant.</p>
``` 
---
- `kbd`:
The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).

  **Example:**  
```html
        <p>To make George eat an apple, press <kbd><kbd>Shift</kbd> + <kbd>F3</kbd></kbd></p>
``` 
---
- `sub and sup`:
The sup element represents a superscript and the sub element represents a subscript.

  **Example:**  
```html
        <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and
``` 
---
- `i`:
 The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts. 
  **Example:**  
```html
<p><i>William Shakespeare</i> is one of the most famous poet in history.</p>
``` 
---
- `b`:
The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede. 
  **Example:**  
```html
<b>this is bold</b> but this is not.
``` 
---
- `u`: The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.


  **Example:**  
```html
<p>You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.</p>
``` 
---


- `mark`:The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.


  **Example:**  
```html
        <blockquote lang="en-GB">
                <p>Look around and you will find, no-one's really
                <mark>colour</mark> blind.</p>
        </blockquote>

``` 
---


- `bdi`:The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]


  **Example:**  
```html
            <li>User <bdi>jcranmer</bdi>: 12 posts.
``` 
---

- `bdo`:The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]


  **Example:**  
```html
  <bdo dir="rtl">
  This text will go right-to-left.
  </bdo>
``` 
---
- `span`:The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.


  **Example:**  
```html
        <p>Their names are
        <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and
        <span lang="fr"><abbr>M<sup>me</sup></abbr> Denise</span>.</p>
        <p>The <i class="taxonomy">Felis silvestris catus</i> is cute.</p>
``` 
---
- `br`:


  **Example:**  
```html
           <p>P. Sherman<br>
            42 Wallaby Way<br>
            Sydney</p>
``` 
---
- `wbr`:  The wbr element represents a line break opportunity.


  **Example:**  
```html
  <p>To learn AJAX, you must be familiar with the XML<wbr>Http<wbr>Request Object.</p>
``` 
---
- `link`:

  **Example:**  
```html
            <title>lsForums — Inbox</title>
            <link rel=icon href=favicon.png sizes="16x16" type="image/png">
            <link rel=icon href=windows.ico sizes="32x32 48x48" type="image/vnd.microsoft.icon">
            <link rel=icon href=mac.icns sizes="128x128 512x512 8192x8192 32768x32768">
            <link rel=icon href=iphone.png sizes="57x57" type="image/png">
            <link rel=icon href=gnome.svg sizes="any" type="image/svg+xml">
            <link rel=stylesheet href=lsforums.css>
``` 
---
- `ins`:The ins element represents an addition to the document.
  **Example:**  
```html
                <h1>List of <del>fruits</del><ins>colors</ins></h1>
                <ul>
                <li><del>Lime</del><ins>Green</ins></li>
                <li><del>Apple</del></li>
                <li>Orange</li>
                <li><del>Pear</del></li>
                <li><ins>Teal</ins></li>
                <li><del>Lemon</del><ins>Yellow</ins></li>
                <li>Olive</li>
                <li><ins>Purple</ins></li>
                </ul>
``` 
---
- `del`: The del element represents a removal from the document.

  **Example:**  
```html
   <h1>List of <del>fruits</del><ins>colors</ins></h1>
                <ul>
                <li><del>Lime</del><ins>Green</ins></li>
                <li><del>Apple</del></li>
                <li><del>Lemon</del><ins>Yellow</ins></li>
                <li>Olive</li>
                <li><ins>Purple</ins></li>
                </ul>
``` 
---
- `source`: The source element allows authors to specify multiple alternative source sets for img elements or multiple alternative media resources for media elements. It does not represent anything on its own.
  **Example:**  
```html
               <source src='video.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
``` 
---
- `img`: An img element represents an image.An img element has a dimension attribute source, initially set to the element itself.

  **Example:**  
```html
               <p>Home town: <img src="https://image.shutterstock.com/image-photo/hand-touching-screen-icon-throw-260nw-696395281.jpg" alt ="internet pic" width="700" height="400"></p>
``` 
---
- `iframe`: The iframe element represents its nested browsing context.
  **Example:**  
```html
      <iframe sandbox="allow-same-origin allow-forms" src=B></iframe>
      <iframe sandbox="allow-scripts" src=C></iframe>
``` 
---
- `embed`:

  **Example:**  
```html
<embed type="video/webm"
       src="/media/cc0-videos/flower.mp4"
       width="250"
       height="200">
``` 
---
- `object`:

  **Example:**  
```html
              <figure>
                <object data="clock.html"></object>
                <figcaption>My HTML Clock</figcaption>
              </figure>
``` 
---
- `video`: A video element is used for playing videos or movies, and audio files with captions.
  **Example:**  
```html

               <video src="brave.webm">
                <track kind=subtitles src=brave.en.vtt srclang=en label="English">
                <track kind=captions src=brave.en.hoh.vtt srclang=en label="English for the Hard of Hearing">
                <track kind=subtitles src=brave.fr.vtt srclang=fr lang=fr label="Français">
                <track kind=subtitles src=brave.de.vtt srclang=de lang=de label="Deutsch">
               </video>
``` 
---
- `audio`: An audio element represents a sound or audio stream. An audio element represents a sound or audio stream.

  **Example:**  
```html
<figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

``` 
---
- `map`: The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.
  **Example:**  
```html
                <map name="shapes">
                 <area shape=rect coords="50,50,100,100"> <!-- the hole in the red box -->
                 <area shape=rect coords="25,25,125,125" href="red.html" alt="Red box.">
                 <area shape=circle coords="200,75,50" href="green.html" alt="Green circle.">
                 <area shape=poly coords="325,25,262,125,388,125" href="blue.html" alt="Blue triangle.">
                 <area shape=poly coords="450,25,435,60,400,75,435,90,450,125,465,90,500,75,465,60"
                       href="yellow.html" alt="Yellow star.">
                </map>
``` 
---
- `area`: The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map. An area element with a parent node must have a map element ancestor.
  **Example:**  
```html
      <MAP NAME="NAV">
        <P>
         <A HREF="/clothes/">Clothes</A>
         <AREA ALT="Clothes" COORDS="0,0,100,50" HREF="/clothes/"> |
         <A HREF="/toys/">Toys</A>
         <AREA ALT="Toys" COORDS="100,0,200,50" HREF="/toys/"> |
         <A HREF="/food/">Food</A>
         <AREA ALT="Food" COORDS="200,0,300,50" HREF="/food/"> |
         <A HREF="/books/">Books</A>
         <AREA ALT="Books" COORDS="300,0,400,50" HREF="/books/">
        </P>
      </MAP>
``` 
---
- `svg`:  The svg element falls into the embedded content, phrasing content, flow content, and palpable content categories for the purposes of the content models in this specification.
  **Example:**  
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
``` 
---
- `table`: The table element represents data with more than one dimension, in the form of a table. The table element takes part in the table model. Tables have rows, columns, and cells given by their descendants. The rows and columns form a grid; a table's cells must completely cover that grid without overlap.

  **Example:**  
```html
          <table>
                <thead>
                 <tr> <th> Game name           <th> Game publisher   <th> Verdict
                <tbody>
                 <tr> <td> Diablo 2            <td> Blizzard         <td> 8/10
                 <tr> <td> Portal              <td> Valve            <td> 10/10
                 <tr> <td> <ins>Portal 2</ins> <td> <ins>Valve</ins> <td> <ins>10/10</ins>
          </table>
``` 
---
- `caption`: The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.
  **Example:**  
```html
    <caption> School auction sign-up sheet </caption>
``` 
---
- `col`:The col element and its span attribute take part in the table model.

  **Example:**  
```html
  <table>
    <colgroup> <col>
    <colgroup> <col> <col> <col>
    <thead>
     <tr> <th> <th>2008 <th>2007 <th>2006
    <tbody>
     <tr> <th scope=rowgroup> Research and development
          <td> $ 1,109 <td> $ 782 <td> $ 712
     <tr> <th scope=row> Percentage of net sales
          <td> 3.4% <td> 3.3% <td> 3.7%
    <tbody>
     <tr> <th scope=rowgroup> Selling, general, and administrative
          <td> $ 3,761 <td> $ 2,963 <td> $ 2,433
     <tr> <th scope=row> Percentage of net sales
          <td> 11.6% <td> 12.3% <td> 12.6%
  </table>
``` 
---
- `tbody`:  The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.

  **Example:**  
```html
     <tbody>
     <tr> <th scope=rowgroup> Research and development
          <td> $ 1,109 <td> $ 782 <td> $ 712
     <tr> <th scope=row> Percentage of net sales
          <td> 3.4% <td> 3.3% <td> 3.7%
``` 
---
- `thread`: The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.
  **Example:**  
```html
 <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
``` 
---
- `tfoot `: The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.

  **Example:**  
```html
    <tbody>
     <tr>
      <th>Gross margin
      <td>$ 11,145
      <td>$  8,154
      <td>$  5,598
    <tfoot>
``` 
---
- `tr`: The tr element represents a row of cells in a table.The tr element takes part in the table model.
  **Example:**  
```html
    <tr>
      <th>Gross margin percentage
      <td>34.3%
      <td>34.0%
      <td>29.0%
``` 
---
- `td`: The td element represents a data cell in a table.The td element and its colspan, rowspan, and headers attributes take part in the table model.

  **Example:**  
```html
       <tr>
       <td headers="n r1"> Sad
       <th id="r1"> Mood
       <td> Happy
``` 
---
- `th`: th element represents a header cell in a table.The th element may have a scope content attribute specified. The scope attribute is an enumerated attribute with five states, four of which have explicit keywords:

  **Example:**  
```html
       <tr>
       <th id="n"> Negative
       <th> Characteristic
       <th> Positive
``` 
---
- `colgroup`:

  **Example:**  
```html
  <table id="sudoku">
    <colgroup><col><col><col>
    <colgroup><col><col><col>
    <colgroup><col><col><col>
    <tbody>
     <tr> <td> 1 <td>   <td> 3 <td> 6 <td>   <td> 4 <td> 7 <td>   <td> 9
     <tr> <td>   <td> 2 <td>   <td>   <td> 9 <td>   <td>   <td> 1 <td>
     <tr> <td> 7 <td>   <td>   <td>   <td>   <td>   <td>   <td>   <td> 6
    <tbody>
     <tr> <td> 2 <td>   <td> 4 <td>   <td> 3 <td>   <td> 9 <td>   <td> 8
     <tr> <td>   <td>   <td>   <td>   <td>   <td>   <td>   <td>   <td>
     <tr> <td> 5 <td>   <td>   <td> 9 <td>   <td> 7 <td>   <td>   <td> 1
    <tbody>
     <tr> <td> 6 <td>   <td>   <td>   <td> 5 <td>   <td>   <td>   <td> 2
     <tr> <td>   <td>   <td>   <td>   <td> 7 <td>   <td>   <td>   <td>
     <tr> <td> 9 <td>   <td>   <td> 8 <td>   <td> 2 <td>   <td>   <td> 5
  </table>
``` 
---
- `form`:
The form element represents a hyperlink that can be manipulated through a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
  **Example:**  
```html
<form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
    <input id=a type=number step=any> +
    <input id=b type=number step=any> =
    <output id=o for="a b"></output>
</form>
``` 
---
- `label`: The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.

  **Example:**  
```html
    <p><label><input type=radio name=c value=0 checked> Black on White</label>
``` 
---
- `legend`: The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.

  **Example:**  
```html
<fieldset>
    <legend>Display</legend>
    <p><label><input type=radio name=c value=0 checked> Black on White</label>
    <p><label><input type=radio name=c value=1> White on Black</label>
    <p><label><input type=checkbox name=g> Use grayscale</label>
    <p><label>Enhance contrast <input type=range name=e list=contrast min=0 max=100 value=0 step=1></label>
    <datalist id=contrast>
     <option label=Normal value=0>
     <option label=Maximum value=100>
    </datalist>
</fieldset>
``` 
---`textarea`: The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.
  **Example:**  
```html
   <textarea placeholder="Dear Francine,

   They closed the parks this week, so we won't be able to
   meet your there. Should we just have dinner?
   
   Love,
   Daddy">
   </textarea>
``` 
---
- `input`: The input element represents a typed data field, usually with a form control to allow the user to edit the data.
  **Example:**  
```html
<p><label>Full name: <input name=fn> <small>Format: First Last</small></label></p>
``` 
---
- `datalist`: The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.

  **Example:**  
```html
<datalist id="urls">
 <option label="MIME: Format of Internet Message Bodies" value="https://www.rfc-editor.org/rfc/rfc2045">
 <option label="Media Session" value="https://mediasession.spec.whatwg.org/">
 <option label="The Single UNIX Specification, Version 3" value="http://www.unix.org/version3/">
</datalist>
``` 
---
- `option`:

  **Example:**  
```html
  <datalist id="urls">
  <option label="MIME: Format of Internet Message Bodies" value="https://www.rfc-editor.org/rfc/rfc2045">
  <option label="HTML" value="https://html.spec.whatwg.org/">
  <option label="DOM" value="https://dom.spec.whatwg.org/">
  <option label="Fullscreen" value="https://fullscreen.spec.whatwg.org/">
  <option label="Media Session" value="https://mediasession.spec.whatwg.org/">
  <option label="The Single UNIX Specification, Version 3" value="http://www.unix.org/version3/">
  </datalist>
``` 
---
- `button`:

  **Example:**  
```html
   <menu>
    <li><button onclick="copy()"><img src="copy.svg" alt="Copy"></button></li>
    <li><button onclick="cut()"><img src="cut.svg" alt="Cut"></button></li>
    <li><button onclick="paste()"><img src="paste.svg" alt="Paste"></button></li>
   </menu>
``` 
---
- `select`: The select element represents a control for selecting amongst a set of options.
  **Example:**  
```html
    <select name="c">
      <optgroup label="8.01 Physics I: Classical Mechanics">
       <option value="8.01.1">Lecture 01: Powers of Ten
       <option value="8.01.2">Lecture 02: 1D Kinematics
       <option value="8.01.3">Lecture 03: Vectors
      <optgroup label="8.02 Electricity and Magnetism">
       <option value="8.02.1">Lecture 01: What holds our world together?
       <option value="8.02.2">Lecture 02: Electric Field
       <option value="8.02.3">Lecture 03: Electric Flux
      <optgroup label="8.03 Physics III: Vibrations and Waves">
       <option value="8.03.1">Lecture 01: Periodic Phenomenon
       <option value="8.03.2">Lecture 02: Beats
       <option value="8.03.3">Lecture 03: Forced Oscillations with Damping
    </select>
``` 
---
- `optgroup`:  The optgroup element represents a group of option elements with a common label.

  **Example:**  
```html
    <label>Course:
     <select name="c">
      <optgroup label="8.01 Physics I: Classical Mechanics">
       <option value="8.01.1">Lecture 01: Powers of Ten
       <option value="8.01.2">Lecture 02: 1D Kinematics
       <option value="8.01.3">Lecture 03: Vectors
      <optgroup label="8.02 Electricity and Magnetism">
       <option value="8.02.1">Lecture 01: What holds our world together?
       <option value="8.02.2">Lecture 02: Electric Field
       <option value="8.02.3">Lecture 03: Electric Flux
      <optgroup label="8.03 Physics III: Vibrations and Waves">
       <option value="8.03.1">Lecture 01: Periodic Phenomenon
       <option value="8.03.2">Lecture 02: Beats
       <option value="8.03.3">Lecture 03: Forced Oscillations with Damping
     </select>
    </label>
``` 
---
- `option`:

  **Example:**  
```html
    <datalist id=contrast>
     <option label=Normal value=0>
     <option label=Maximum value=100>
    </datalist>
``` 
---
- `output`: The output element represents the result of a calculation performed by the application, or the result of a user action.

  **Example:**  
```html
<form onsubmit="return false" oninput="o.value = a.valueAsNumber + b.valueAsNumber">
    <input id=a type=number step=any> +
    <input id=b type=number step=any> =
    <output id=o for="a b"></output>
</form>
``` 
---
- `progress`: The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.

  **Example:**  
```html
 <p>Progress: <progress id=p max=100><span>0</span>%</progress></p>
``` 
---
- `meter`: The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.

  **Example:**  
```html
    <dt>Radius: <dd> <meter min=0 max=20 value=12 title="centimeters">12cm</meter>
``` 
---
- `fielset`: The fieldset element represents a set of form controls (or other content) grouped together, optionally with a caption. The caption is given by the first legend element that is a child of the fieldset element, if any. The remainder of the descendants form the group.

  **Example:**  
```html
    <fieldset>
     <legend> Pizza Size </legend>
     <p><label> <input type=radio name=size> Small </label></p>
     <p><label> <input type=radio name=size> Medium </label></p>
     <p><label> <input type=radio name=size> Large </label></p>
    </fieldset>
``` 
---
- `details`: The details element represents a disclosure widget from which the user can obtain additional information or controls.

  **Example:**  
```html
   <details>
    <summary><label for=fn>Name & Extension:</label></summary>
    <p><input type=text id=fn name=fn value="Pillar Magazine.pdf">
    <p><label><input type=checkbox name=ext checked> Hide extension</label>
   </details>
``` 
---
- `summary`:
 The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.

  **Example:**  
```html
    <summary><label for=fn>Name & Extension:</label></summary>
``` 
---
- `dialog`:

  **Example:**  
```html
   <dialog>
    <h1>Add to Wallet</h1>
    <p><strong><label for=amt>How many gold coins do you want to add to your wallet?</label></strong></p>
    <p><input id=amt name=amt type=number min=0 step=0.01 value=100></p>
    <p><small>You add coins at your own risk.</small></p>
    <p><label><input name=round type=checkbox> Only add perfectly round coins</label></p>
    <p><input type=button onclick="submit()" value="Add Coins"></p>
   </dialog>
``` 
---
- `script`: The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.
  **Example:**  
```html
  <section>
      <h2>Task Progress</h2>
      <p>Progress: <progress id=p max=100><span>0</span>%</progress></p>
      <script>
      var progressBar = document.getElementById('p');
      function updateProgress(newValue) {
        progressBar.value = newValue;
        progressBar.getElementsByTagName('span')[0].textContent = newValue;
      }
      </script>
  </section>
``` 
---
- `nonscript`: The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.

  **Example:**  
```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
``` 
---
- `template`: The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.

  **Example:**  
```html
 <template id="template"><p>Smile!</p></template>
``` 
---
- `slot`: The slot element defines a slot. It is typically used in a shadow tree. A slot element represents its assigned nodes, if any, and its contents otherwise.

  **Example:**  
```html
      <slot name="attributes"><p>None</p></slot>
``` 
---
- `canvas`: The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.

  **Example:**  
```html
<canvas width=200 height=200 style=width:100px;height:100px>

    <canvas width="800" height="450"></canvas>
    <script>
    
     var context = document.getElementsByTagName('canvas')[0].getContext('2d');
    
     var lastX = context.canvas.width * Math.random();
     var lastY = context.canvas.height * Math.random();
     var hue = 0;
     function line() {
       context.save();
       context.translate(context.canvas.width/2, context.canvas.height/2);
       context.scale(0.9, 0.9);
       context.translate(-context.canvas.width/2, -context.canvas.height/2);
       context.beginPath();
       context.lineWidth = 5 + Math.random() * 10;
       context.moveTo(lastX, lastY);
       lastX = context.canvas.width * Math.random();
       lastY = context.canvas.height * Math.random();
       context.bezierCurveTo(context.canvas.width * Math.random(),
                             context.canvas.height * Math.random(),
                             context.canvas.width * Math.random(),
                             context.canvas.height * Math.random(),
                             lastX, lastY);
    
       hue = hue + 10 * Math.random();
       context.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
       context.shadowColor = 'white';
       context.shadowBlur = 10;
       context.stroke();
       context.restore();
     }
     setInterval(line, 50);
    
     function blank() {
       context.fillStyle = 'rgba(0,0,0,0.1)';
       context.fillRect(0, 0, context.canvas.width, context.canvas.height);
     }
     setInterval(blank, 40);
    

    </script>
    <hr>
``` 
---


## HTML Input types

##  text

**example**

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```
## submit

**example**

```html
  <input type="submit" value="Submit">
```

## button

**example**

```html
   <p><input type=button onclick="submit()" value="Add Coins"></p>
```

## datetime-local

**example**

```html
    <p><label>Departure time: <input type=datetime-local name=totime step=3600></label></p>
```
## email

**example**

```html
    <p><label>Address: <input type="email" name="address" placeholder="john@example.net"></label></p>
```
## file

**example**

```html
  <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
```
## hidden
A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!	
**example**

```html
 <form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post">
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657">
  </form>

```
## image

**example**

```html
  <input type="image" id="image" alt="Login"
       src="/media/examples/login-button.png">
```

## month

**example**

```html
 <input type="month" id="start" name="start"
       min="2018-03" value="2018-05">
```

## password

**example**

```html
    <p><label>Password: <input type="password" name="password"></label></p>
```

## number
A control for entering a number. Displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
**example**

```html
  <input type="number" id="tentacles" name="tentacles"
       min="10" max="100">
```
## radio

**example**

```html
   <fieldset>
     <legend> Pizza Size </legend>
     <p><label> <input type=radio name=size> Small </label></p>
     <p><label> <input type=radio name=size> Medium </label></p>
     <p><label> <input type=radio name=size> Large </label></p>
    </fieldset>
```
## range

**example**

```html
  <input type="range" name="a" list="a-values">
  <datalist id="a-values">
  <option value="10" label="Low">
  <option value="90" label="High">
  </datalist>
```
## reset

**example**

```html
 <form>
    <div class="controls">

        <label for="id">User ID:</label>
        <input type="text" id="id" name="id" />

        <input type="reset" value="Reset">
        <input type="submit" value="Submit">

    </div>
</form>

```
## search

**example**

```html
  <label>Google: <input type="search" name="q"></label> <input type="submit" value="Search...">
```
## submit

**example**

```html
  <input type="submit" value="Submit">
```
## tel

**example**

```html
  <input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>
```
## text

**example**

```html
  <p><label>Name: <input type="text" name="fullname" placeholder="Stella Zhang"></label></p>

```
## time

**example**

```html
  <input name="sleepStart" type=time min="21:00" max="06:00" step="60" value="00:00">
```
## url

**example**

```html
 <input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required>
```
## week

**example**

```html
  <input type="week" name="week" id="camp-week"
       min="2018-W18" max="2018-W26" required>
```

## daytime

**example**

```html
 
<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">
```
<<<<<<< HEAD

## HTML Website notes after revision and review session with Camdyn on 6/24 and more work on 6/27
### Main structure: 

```html
First, we see that 
<!DOCTYPE html> 
<html lang = "en">
<head>
     <meta charset="UTF-8">
     <title>Document</title>
</head>
<body>
    <header>

    </header>
</body>
<main>
  <article>
    <h1></h1>
    <p></p>
    <nav><ol><li></li></ol></nav>
    <section>
      <h2></h2>
      <h3></h3>
    </section>

  </article>
  <aside>
    </aside>
</main>
<footer>
  
  <div>
    <form>
      <label></label>
      <input>
      <input>
      </form>
    </div>
</footer>
</html>
```
### 

=======
>>>>>>> 7f66302e968c683fed749b5504943179efc3721e
