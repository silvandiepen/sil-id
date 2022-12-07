## Playground


----

<!--
<script type="module">
  import { createApp } from 'https://unpkg.com/petite-vue?module';
  import { useId, createId } from "https://unpkg.com/@sil/id";

  createApp({
    myId: createId(),
    someId: '33433',
   }).mount()
</script>

<div v-scope>
{{ myId }}
{{ someId }}
</div> -->

<script type="module">
  import { createApp } from 'https://unpkg.com/petite-vue?module'

//   import { useId, createId } from "https://unpkg.com/@sil/id";

  createApp({
    format: 'XXXX-XXXX-XXXX-XXXX',
    total: null,
    alphabet: null,
    alphabetOptions: [null,'a-z', 'A-Z', 'a-Z','0-9', 'a-z0-9', 'a-Z0-9', 'a-Z0-9'],

    // getters
    get myId() {
        return "hoi"
    //   return createId({ format })
    },
    // methods
    increment() {
      this.count++
    }
  }).mount()
</script>

<!-- v-scope value can be omitted -->
<div v-scope>
    <p>{{ format }}</p>
    <p>{{ total }}</p>
    <p>{{ alphabet }}</p>
    <p>{{ myId }}</p>
    <br/>
    <label>Alphabet</label>
    <select v-model="alphabet">
        <option v-for="option,idx in alphabetOptions" :value="option" :key="idx">{{ option }}</option>
    </select>
    <label>Format</label>
    <br/>
    <input type="text" v-model="format" />
    <button @click="increment">increment</button>
</div>
