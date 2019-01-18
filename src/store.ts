import Vue from 'vue';
import Vuex from 'vuex';
import levelTable from './data/leveltable';
import skills from './data/skills'
import skillData from './data/skilldata';
import skillColors from './data/skillcolors';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeSkill: null,
        skills,
        skillColors,
        skillData,
        levelTable
    },

    mutations: {
        changeActiveSkill(state, newCategory) {
            state.activeSkill = newCategory;
        },
        updateSkill(state, updatedSkill) {
            let i = 0;
            for (let skill of state.skills) {
                if (skill.name === state.activeSkill) {
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
            for (let entry of levelTable) {
                if (entry.xp > payload.updatedSkill[payload.field]) { row = entry.level - 2; break; }
            }
            for (let skill of state.skills) {
                if (skill.name === state.activeSkill) {
                    if (payload.field.includes('player')) {
                        state.skills[i].playerLevel = levelTable[row].level;
                    } else {
                        state.skills[i].targetLevel = levelTable[row].level;
                    }
                    break;
                }
                i++;
            }
        },
        updateXpFromLevel(state, payload) {
            let i = 0;
            let row = 0;
            for (let entry of levelTable) {
                if (entry.level == payload.updatedSkill[payload.field]) { row = entry.level - 1; break; }
            }
            for (let skill of state.skills) {
                if (skill.name === state.activeSkill) {
                    if (payload.field.includes('player')) {
                        state.skills[i].playerXp = levelTable[row].xp;
                    } else {
                        state.skills[i].targetXp = levelTable[row].xp;
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
