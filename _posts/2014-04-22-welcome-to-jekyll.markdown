---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-04-22 01:22:01
categories: jekyll update
---

Athran'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight java %}
public interface DataPackage {
    
    String getName();
    
    String getAddress();
    
    int getID();
    
    public static class Builder {
        
        private String mName;
        private String mAddress;
        private int mPlaceID;
        
        public Builder() {
            mName = "";
            mAddress = "";
            mPlaceID = 0;
        }
        
        public Builder setName(String name) {
            mName = name;
            return this;
        }
        
        public Builder setAddress(String address) {
            mAddress = address;
            return this;
        }
        
        public Builder setID(int id) {
            mPlaceID = id;
            return this;
        }
        
        public DataPackage build() {
            return new DataPackage() {

                @Override
                public String getName() {
                    return mName;
                }

                @Override
                public String getAddress() {
                    return mAddress;
                }

                @Override
                public int getID() {
                    return mPlaceID;
                }
                
            };
        }
        
        
    }
    
}
{% endhighlight %}
Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
