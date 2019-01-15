import Vue from 'vue';
import Vuex from 'vuex';
import categories from './categories';
import leveltable from './leveltable';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeCategory: null,
        skills: [
            { name: 'Agility', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Construction', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Cooking', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Crafting', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Farming', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Firemaking', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Fishing', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Fletching', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Herblore', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Hunter', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Mining', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Runecrafting', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Smithing', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 },
            { name: 'Woodcutting', playerLevel: 0, playerXp: 0, targetLevel: 0, targetXp: 0 }
        ],
        categories,
        leveltable
    },

    mutations: {
        changeActiveCategory(state, newCategory) {
            state.activeCategory = newCategory;
        },
        updateSkill(state, updatedSkill) {
            let i = 0;
            for (let skill of state.skills) {
                if (skill.name === state.activeCategory) {
                    state.skills[i].playerLevel = updatedSkill.playerLevel;
                    state.skills[i].playerXp = updatedSkill.playerXp;
                    state.skills[i].targetLevel = updatedSkill.targetLevel;
                    state.skills[i].targetXp = updatedSkill.targetXp;
                    break;
                }
                i++;
            }
        },
        updateLevelFromXp(state, payload) {
            let i = 0;
            let row = 0;
            for (let entry of leveltable) {
                if (entry.xp > payload.updatedSkill[payload.field]) { row = entry.level - 2; break; }
            }
            for (let skill of state.skills) {
                if (skill.name === state.activeCategory) {
                    if (payload.field.includes('player')) {
                        state.skills[i].playerLevel = leveltable[row].level;
                    } else {
                        state.skills[i].targetLevel = leveltable[row].level;
                    }
                    break;
                }
                i++;
            }
        },
        updateXpFromLevel(state, payload) {
            let i = 0;
            let row = 0;
            for (let entry of leveltable) {
                if (entry.level == payload.updatedSkill[payload.field]) { row = entry.level - 1; break; }
            }
            for (let skill of state.skills) {
                if (skill.name === state.activeCategory) {
                    if (payload.field.includes('player')) {
                        state.skills[i].playerXp = leveltable[row].xp;
                    } else {
                        state.skills[i].targetXp = leveltable[row].xp;
                    }
                    break;
                }
                i++;
            }
        }
    },
    actions: {
        updateFromLevel({ commit }, payload) {
            commit('updateXpFromLevel', payload);
            commit('updateSkill', payload.updatedSkill);
        },
        updateFromXp({ commit }, payload) {
            commit('updateLevelFromXp', payload)
            commit('updateSkill', payload.updatedSkill)
        }
    },
});
