$(function(){var r=$(".basic-ratings"),n=$(".custom-svg-ratings"),e=$(".multi-color-ratings"),s=$(".half-star-ratings"),l=$(".full-star-ratings"),o=$(".read-only-ratings"),g=$(".onset-event-ratings"),f=$(".onChange-event-ratings"),h=$(".methods-ratings"),c=$(".btn-initialize"),R=$(".btn-destroy"),u=$(".btn-get-rating"),d=$(".btn-set-rating");if(r&&r.rateYo({rating:3.6,rtl:isRtl}),n&&n.rateYo({rating:3.2,starSvg:"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'-></path>",rtl:isRtl}),e&&e.rateYo({rtl:isRtl,multiColor:{startColor:"#fffca0",endColor:"#ffab00"}}),s&&s.rateYo({rtl:isRtl,rating:2}),l&&l.rateYo({rtl:isRtl,rating:2}),o&&o.rateYo({rating:2,rtl:isRtl}),g&&g.rateYo({rtl:isRtl}).on("rateyo.set",function(i,a){alert("The rating is set to "+a.rating+"!")}),f&&f.rateYo({rtl:isRtl}).on("rateyo.change",function(i,a){var v=a.rating;$(this).parent().find(".counter").text(v)}),h){var t=h.rateYo({rtl:isRtl});c&&c.on("click",function(){t.rateYo({rtl:isRtl})}),R&&R.on("click",function(){t.hasClass("jq-ry-container")?t.rateYo("destroy"):window.alert("Please Initialize Ratings First")}),u&&u.on("click",function(){if(t.hasClass("jq-ry-container")){var i=t.rateYo("rating");window.alert("Current Ratings are "+i)}else window.alert("Please Initialize Ratings First")}),d&&d.on("click",function(){t.hasClass("jq-ry-container")?t.rateYo("rating",1):window.alert("Please Initialize Ratings First")})}});