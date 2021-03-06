import { router } from '_/router/router';
import { store } from '_/vuex/store';

export default function() {
    const instance = $.jstree.reference(this);

    const node = instance.get_node(this);

    const entryId = store.state.admin.editedEntry.id;

    const tableName = store.state.admin.selectedModule.table_name;

    // Do not reload if currently edited node is doubleclicked
    if (node.original.tableName === tableName && node.original.originalId === entryId) {
        return false;
    }

    // Do not allow loading of nodes that belong to a different module
    if (node.original.tableName !== tableName) {
        return false;
    }

    router.push(`/admin/${node.original.tableName}/${node.original.originalId}`);
}
