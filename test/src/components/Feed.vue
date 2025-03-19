<script setup lang="ts">
import { ref, onMounted } from 'vue'
import verstkaPlayer from 'verstka-player';

const verstkaArticleHtml = '<div class="body" data-vms-version="1" data-vms-client="my_verstka" data-vms-hash="984538aee3a6c96bf6e962679350ea77" style="height: 340px; width: 500px;"><div class="object" data-type="background" data-id="1" data-locked="false" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: none; left: -48px; top: 10px;">T</div><div class="object" style="width: 400px; height: 76px; z-index: 1; left: 39px; top: 58px;" data-id="6" data-type="text" data-locked="false" data-floatable="false"><div class="content"><div class="editor" data-v-baseline="false"><p style="line-height: 59px;"><span style="font-family: &quot;Bebas Neue&quot;; font-weight: 400; font-size: 58px;">Verstka</span></p></div></div></div><div class="object" style="width: 108px; height: 114px; z-index: 2; left: 51px; top: 182px;" data-id="7" data-type="shape" data-locked="false" data-animation-event="visible" data-animation-scroll-position="center" data-animation-scroll-margin="0" data-animation-play-mode="loop" data-animation-ping-pong="false" data-animation-play-times="1" data-angle="0" data-angle_x="0" data-angle_y="0" data-scale="100"><div class="content" style="opacity: 1; transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg) scale(1);"></div><div class="data">{"points":[{"id":1,"properties":{"x":0,"y":0,"z":0,"opacity":1,"scaleX":1,"scaleY":1,"rotationX":0,"rotationY":0,"rotationZ":0}},{"id":3,"properties":{"x":0,"y":0,"z":0,"opacity":1,"scaleX":1,"scaleY":1,"rotationX":0,"rotationY":0,"rotationZ":360}}],"steps":[{"id":2,"properties":{"duration":0.8,"delay":0,"bezier":[],"ease":"Power0.easeNone","automatic_duration":true}}],"transform_origin":{"x":0.5,"y":0.5}}</div></div><div class="object" style="width: 88px; height: 88px; z-index: 3; left: 277px; top: 252px;" data-id="11" data-type="shape" data-locked="false" data-shape-type="ellipse"><div class="content" data-background-displayed="true" style="background-color: transparent; background-image: linear-gradient(rgb(251, 61, 24), rgb(208, 213, 52));" data-background-gradient-displayed="true"></div></div><settings><section name="grid">{"width":500,"column_width":45,"columns_n":6,"gutter":45,"margin":0,"line":20}</section><section name="palette">default</section><section name="responsive_mode">false</section><section name="responsive_min_width">767</section><section name="responsive_max_width">1300</section><section name="colorchanger_fullscreen">false</section><section name="colorchanger_overflow">true</section><section name="page_cropping">true</section><section name="global_google_analytics_id"></section><section name="global_yandex_metrika_id"></section><section name="article_mode">{"mode":"page","transition_type":"slide","transition_direction":"horizontal","transition_look":"belt","slides_form":{}}</section><section name="default_font">{"css":".editor {font-family: garamond-premier-pro-caption; font-size: 16px; font-weight: 400; line-height: 24px;}"}</section><section name="googleFontConfig">[{"caption":"Bebas Neue","name":"Bebas Neue","styles":{"Regular":"400, "}}]</section><section name="googleFontUrl">https://fonts.googleapis.com/css2?family=Bebas%20Neue:wght@400</section></settings></div>';

onMounted(() => {
  verstkaPlayer.Article.enable()
})
</script>

<template>
  <div class="feed">
    <div class="feed-item" v-html="verstkaArticleHtml"></div>
  </div>
</template>

<style scoped>
.feed {
  max-width: 600px;
  border-radius: 16px;
  margin: 20px auto;
}

.feed-item {
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
}

</style>
