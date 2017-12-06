export default {
    computed:{
        filteredItems() {
            return this.$store.items_list.filter((item) => {
                return item.title.match(this.search)
            })
        }
    }
}