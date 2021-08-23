<template>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <q-splitter v-model="splitterModel" class="full-height full-width q-pa-xl">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="1.0.4">
              <div class="q-tab__label">v1.0.4</div>
              <small class="text-grey-7">23.08.2021</small>
            </q-tab>
            <q-tab name="1.0.3">
              <div class="q-tab__label">v1.0.3</div>
              <small class="text-grey-7">22.08.2021</small>
            </q-tab>
            <q-tab name="1.0.2">
              <div class="q-tab__label">v1.0.2</div>
              <small class="text-grey-7">31.06.2021</small>
            </q-tab>
            <q-tab name="1.0.1">
              <div class="q-tab__label">v1.0.1</div>
              <small class="text-grey-7">26.06.2021</small>
            </q-tab>
            <q-tab name="1.0.0">
              <div class="q-tab__label">v1.0.0</div>
              <small class="text-grey-7">21.06.2021</small>
            </q-tab>
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="1.0.4">
              <div class="text-h4 q-mb-md">v1.0.4</div>
              <div>
                    <ul>
                        <li>Durchsuchen von gespeicherten Anfragen jetzt möglich</li>
                        <li>Tägliche Statistik über Anfragen mit derer Ergebnise nun als Chart</li>
                        <li>Changelog für Web und Bot</li>
                    </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.3">
              <div class="text-h4 q-mb-md">v1.0.3</div>
              <div>
                    <ul>
                        <li>Kommentare haben nun ein Timestamp erhalten der anzeigt wann die Überprüfung erfolgte</li>
                        <li><span class="text-italic">Titel</span> und <span class="text-italic">Interpret</span> werden nun als Tags gesetzt</li>
                    </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.2">
              <div class="text-h4 q-mb-md">v1.0.2</div>
              <div>
                    <ul>
                        <li>Markierungen mit <span class="text-italic">@Sauce</span> und Text werden nun erkannt</li>
                    </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.1">
              <div class="text-h4 q-mb-md">v1.0.1</div>
              <div>
                    <ul>
                        <li>Wechsel von Audd.io zu ACRCloud</li>
                        <li>Korrektur eines Rechtschreibfehlers</li>
                    </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.0">
              <div class="text-h4 q-mb-md">v1.0.0</div>
              <div>
                    <ul>
                        <li>Erkennen von Markierungen</li>
                        <li>Herunterladen des Videos</li>
                        <li>Extrahieren der Audiospur</li>
                        <li>Erkennen der Musik mittels Audd.io</li>
                        <li>Kommentieren von Metadaten</li>
                        <li>Speichern der Daten in der Datenbank</li>
                    </ul>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref('1.0.4'),
      splitterModel: ref(10),
    };
  },
};
</script>