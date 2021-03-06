---
layout: post
title: "Basic template for writing an Android app in Scala"
date: 2014-04-23
---

*Introduction to the most basic components that make up an Android app. We'll use a template to set up all the things that you need, so that you can immediately start making your first app with minimal frustration and anger. At the end of this article, you should have a simple app running on your device, that you can then start experimenting with.*

*This post assumes no familiarity with Scala and Android, but you should be familiar
with [Java][java], [Maven][maven] and [git][git]. Consult their respective documentations, or ask a VandyApps officer
for help.*

![Sample App](/images/android-scala-template-image1.png)

Java is the main language supported for making Android applications. Some people enjoy writing
in Java, other people liken it to smashing one's fingers under a garbage compactor. I am somewhere in the middle.

Regardless,
you can make Android apps with other languages. It is *possible* to use C and C++ using the
[Native Development Kit (NDK)][native] for example, but I haven't seen anyone make a whole[^whole] app
with it. Maybe they all shot themselves in the head before they could finish one. 

I won't bore you with
the details of my experimentation with other claimants to Java's throne, so I'll just say that
[Scala][scala] is the second best[^best] programming language to make an Android app with.

### The template

Fork and clone the template from my [repository][template-repo] into your machine.

Now you have a template folder named "android-scala-template-basic". I suggest you keep this folder's content intact, so that you can easily create multiple new projects based on the template. Create another folder, maybe named "test-scala-android", and copy the content of the template folder into it.

There are eight files and two subfolders in the template. Each have their own purposes, but you only need to know about a few of them to get started. 

### `src/com/marsupial/wallaby/MainActivity.scala`

The `src` folder holds the source code of the application. Don't mind the bizarre directory structure; that's just how Java rolls. Go down the rabbit hole, and you'll eventually see the only source code file we have.

{% highlight scala %}
package com.marsupial.wallaby

import android.app.Activity
import android.os.Bundle

class MainActivity extends Activity {

  /**
   * Called when the activity is first created.
   */
  override def onCreate(saved: Bundle) {
    super.onCreate(saved)
    setContentView(R.layout.main)
  }

}
{% endhighlight %}

Are you feeling that weird "I've never seen this before but it looks familiar" sensation? This is Scala, a close half-sibling[^sibling] of Java. First, no semicolons! Second, class declaration is similar (we'll talk about that in another post), but method definition is different. You do it like this: 
{% highlight scala %}
[modifier] def methodName(argName: ArgType): ReturnType = {}
{% endhighlight %}
For a void method like onCreate, there is an alternative declaration: 
{% highlight scala %}
[modifier] def methodName(argName: ArgType) {}
{% endhighlight %}

The first line in the file is the package statement. The package name should correspond to the folder structure of src; `org.horse.lily.MyClass` would become `src/org/horse/lily/MyClass.scala`. Next are the import statements, used to bring the names into scope. Then come the class declaration. We declare the class `MainActivity`, which extends `Activity`. An Activity is "an application component that provides a screen with which users can interact in order to do something."[^activity] From here you can add buttons to the screen, handle a touch event, display images and text, and a whole lot more. 

We then override the `onCreate` method so that we can do something when the Activity is first created. Since this is the only Activity we have, the code here is also the first of our code to ever run when the app is first initialized.

### `res/layout/main.xml`

The `res` folder holds all the resources that makes your app pretty. While the codes in `src` defines the app's behaviours (what happen when you click a button), this folder is all about appearance.

In the last line of MainActivity's `onCreate` method you'll see `setContentView(R.layout.main)`. This sets the content of the main window to the layout defined in `main.xml`.

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:orientation="vertical"
              android:layout_width="match_parent"
              android:layout_height="match_parent">

    <TextView
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:gravity="center"
            android:textSize="24sp"
            android:text="Hello World, MainActivity"/>
            
</LinearLayout>
{% endhighlight %}

`LinearLayout` is the parent container that hold all the contents of a window. Inside it is a `TextView` that displays a short snippet of text. You can change everything about how the text should look like by setting the appropriate parameters here.

When you eventually run the app, it should look like the image shown at the top of this page.

### `AndroidManifest.xml`

> The manifest file presents essential information about your app to the Android system, information the system must have before it can run any of the app's code.[^manifest]

You will be making minor changes to this file as you develop the app. Change the value of `manifest::package` from `com.marsupial.wallaby` to a different package name when you want to create a different app. The package name chosen affects the folder structure of `src`. `application::android:label` is the app's name, and `icon` is obviously the icon. Both of these will determine how the app will look like in the phone's Apps list.

### `pom.xml`

This is a configuration file that tell the Maven build system how to compile and package the application. Just like the manifest file, the pom.xml file has largely been set for you, and you will only be making minor changes to it as you go along. The most important part is the project definition as shown below.

{% highlight xml %}
    <groupId>com.marsupial</groupId>
    <artifactId>wallaby</artifactId>
    <packaging>apk</packaging>
    <version>0.0.1-SNAPSHOT</version>
    <name>Wallaby</name>
{% endhighlight %}

The `groupId` and `artifactId` values should match the package name defined in the manifest file, and of course the package name in the source files as well as the subfolder structure of src. This file is also where you would declare the dependencies.

{% highlight xml %}
    <dependencies>

        <dependency>
            <groupId>com.google.android</groupId>
            <artifactId>android</artifactId>
            <version>4.1.1.4</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-library</artifactId>
            <version>${scala.version}</version>
        </dependency>

        <!-- Add dependencies here -->

    </dependencies>
{% endhighlight %}

You can see that by default the project depends on the Android library, because it is an Android app, and the Scala language library because it is written in Scala. When you find yourselves needing more libraries, just add it to the list.

### Running the example app

After you have understood the four basic components (MainActivity.scala, main.xml, AndroidManifest.xml, pom.xml) you can start messing around with it.

### Footnotes
[^best]: "Best" here takes into account documentation and community support, as well as the number of StackOverflow questions and answers. No matter how good the language is, programming in it is still painful without good guidance. I enjoy Scala very much, but many a times I found myself at a dead-end with a mysterious [error message](https://xkcd.com/979/).

[^whole]: In games and graphic intensive applications, only the OpenGL rendering codes are written in C. Most of the app would still be written in Java.

[^manifest]: http://developer.android.com/guide/topics/manifest/manifest-intro.html

[^activity]: http://developer.android.com/guide/components/activities.html

[^sibling]: The dude that designed Scala also worked on Java. http://en.wikipedia.org/wiki/Martin_Odersky

[template-repo]: https://github.com/AliceCengal/android-scala-template-basic
[native]: https://developer.android.com/tools/sdk/ndk/index.html
[scala]: http://www.scala-lang.org/
[java]: http://en.wikipedia.org/wiki/Java
[maven]: http://maven.apache.org/
[git]: http://git-scm.com/
