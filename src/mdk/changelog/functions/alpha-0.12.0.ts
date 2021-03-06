import * as mdk from 'mdkjs'

export const shaped = new mdk.CraftingShaped({
    filename: 'shaped1',
    description: '有序合成，合成预览',
    render(ctx) {
        ctx.add({
            type: 'crafting_shaped',
            pattern: [
                '#@#',
                '@#@',
                '#@#',
            ],
            key: {
                '@': {
                    item: 'stone',
                },
                '#': {
                    item: 'grass',
                }
            },
            result: {
                item: 'crimson_stairs'
            }
        })
    }
})

export const shapeless = new mdk.CraftingShapeless({
    filename: 'shapless',
    description: '无序合成',
    render(ctx) {
        ctx.add({
            type: "crafting_shapeless",
            group: "dyed_bed",
            ingredients: [
              {
                "item": "stone"
              },
              {
                "item": "glass"
              }
            ],
            "result": {
                item: "stone"
            }
          })
    }
})

export const smoke = new mdk.Smelting({
  filename: 'smoke',
  description: 'smoke',
  render(ctx) {
    ctx.add({
      "type": "smoking",
      "ingredient": {
        "item": "stone"
      },
      "result": {
        item: "stone"
      },
      "experience": 0.35,
      "cookingtime": 100
    })
  }
})

export const smithing = new mdk.Smithing({
  filename: 'smite',
  description: 'smite',
  render(ctx) {
    ctx.add({
      type: "smithing",
      addition: {
        item: 'dark_oak_slab',
      },
      base: {
        tag: 'dead_brain_coral'
      },
      result: {
        item: 'white_concrete'
      }
    })
  }
})

export const alpha12 = new mdk.File({
    filename: 'alpha12',
    description: '0.12.0-alpha更新说明',
    tag: 'load', // 如果此文件被加载会自动加入tags/load文件下
    render(ctx) {
        ctx.addComment('优化了接口定义，分包，修复一些bug')
        ctx.addComment('createFile函数添加description字段，用于备注文件信息')
        ctx.addComment('createFile函数添加对recipe类型文件的支持')
        ctx.addComment('添加对注释字段的高亮显示')
        ctx.addComment('添加createEntity用于生成实体，支持summon指令')

        // const creeper = mdk.createEntity({
        //     id: 'creeper',
        //     NoAI: true,
        //     Fuse: 0,
        // })
        // creeper.summon()
    }
})