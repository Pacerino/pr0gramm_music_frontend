<template>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <q-splitter
        v-model="splitterModel"
        class="full-height full-width q-pa-xl"
      >
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="1.0.7">
              <div class="q-tab__label">v1.0.7</div>
              <small class="text-grey-7">05.09.2021</small>
            </q-tab>
            <q-tab name="1.0.6">
              <div class="q-tab__label">v1.0.6</div>
              <small class="text-grey-7">30.08.2021</small>
            </q-tab>
            <q-tab name="1.0.5">
              <div class="q-tab__label">v1.0.5</div>
              <small class="text-grey-7">24.08.2021</small>
            </q-tab>
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
            <q-tab-panel name="1.0.7">
              <div class="text-h4 q-mb-md">v1.0.7</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul>
                  <li>Posts ohne Ergebnisse werden nicht in der Übersicht angezeigt - Danke an <a href="https://pr0gramm.com/user/5yn74x " target="_blank" class="text-info">5yn74x</a></li>
                  <li>Alle 10 Minuten werden die Kommentare des Bots abgerufen/geupdated</li>
                  <li>Upvotes und Downvotes eines Ergebnis werden jetzt in dem Infoscreen angezeigt</li>
                  <li>Letzte Aktualisierung des Kommentares wird in der Übersicht angezeigt</li>
                  <li>Benis vom Kommentar wird nun in der Übersicht angezeigt</li>
                  <li>Sollten keine Links vorhanden sein, wird der Benutzer auf aha-music.com weitergeleitet</li>
                  <li>Korrektur eines Typos</li>
                </ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul></ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.6">
              <div class="text-h4 q-mb-md">v1.0.6</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul>
                  <li>In der Tabelle können nun PostID und die URL angeklickt werden - Danke an <a href="https://pr0gramm.com/user/holzmaster" target="_blank" class="text-secondary">holzmaster</a></li>
                  <li>Alle Links werden nun durch eigene ersetzt</li>
                  <li>Github Pages wurde gelöscht</li>
                  <li>Eine eigene Domain</li>
                </ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul>
                  <li>Alle Links werden nun durch eigene ersetzt</li>
                </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.5">
              <div class="text-h4 q-mb-md">v1.0.5</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul>
                  <li>In der Statistik kann nun ein Zeitraum ausgewählt werden</li>
                </ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul></ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.4">
              <div class="text-h4 q-mb-md">v1.0.4</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul>
                  <li>Durchsuchen von gespeicherten Anfragen jetzt möglich</li>
                  <li>
                    Tägliche Statistik über Anfragen mit derer Ergebnisse nun als
                    Chart
                  </li>
                  <li>Changelog für Web und Bot</li>
                </ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul></ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.3">
              <div class="text-h4 q-mb-md">v1.0.3</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul></ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul>
                  <li>
                    Kommentare haben nun ein Timestamp erhalten der anzeigt wann
                    die Überprüfung erfolgte
                  </li>
                  <li>
                    <span class="text-italic">Titel</span> und
                    <span class="text-italic">Interpret</span> werden nun als
                    Tags gesetzt
                  </li>
                </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.2">
              <div class="text-h4 q-mb-md">v1.0.2</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul></ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul>
                  <li>
                    Markierungen mit <span class="text-italic">@Sauce</span> und
                    Text werden nun erkannt
                  </li>
                </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.1">
              <div class="text-h4 q-mb-md">v1.0.1</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul></ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
                <ul>
                  <li>Wechsel von Audd.io zu ACRCloud</li>
                  <li>Korrektur eines Rechtschreibfehlers</li>
                </ul>
              </div>
            </q-tab-panel>
            <q-tab-panel name="1.0.0">
              <div class="text-h4 q-mb-md">v1.0.0</div>
              <div>
                <div class="text-h6 q-mb-md">Website</div>
                <ul></ul>
                <q-separator />
                <div class="text-h6 q-mb-md">Bot</div>
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
      tab: ref('1.0.7'),
      splitterModel: ref(10),
    };
  },
};
</script>