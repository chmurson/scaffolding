const prompt = require('prompt');
const mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const wrench = require('wrench');
const changeCase = require('change-case');

exports.generate = function( config, tplAbsDirname) {
    const defaultFile = '.default.scaffolding.json';
    const defaults = fs.existsSync(defaultFile) ? JSON.parse(fs.readFileSync(defaultFile).toString()) : {};

    Object.keys(defaults).forEach(function(key) {
        if (config.properties[key]) {
            config.properties[key]['default'] = defaults[key];
        }
    });

    prompt.start();
    prompt.get(config, function(err, rawResult) {
        const tpls = config.tpl || {};

        const result = {
            ...rawResult,
            ...allChangeCases()
        }

        Object.keys(tpls).forEach(function(tpl) {
            const distPath = mustache.render(tpls[tpl], result);
            const distDir = path.dirname(distPath);
            const tplAbsPath = path.resolve(tplAbsDirname, tpl);

            if (fs.statSync(tplAbsPath).isFile()) {
                wrench.mkdirSyncRecursive(distDir);

                fs.writeFileSync(distPath, mustache.render(fs.readFileSync(tplAbsPath, 'utf-8'), result));
            } else {
                wrench.mkdirSyncRecursive(distDir);
                wrench.copyDirSyncRecursive(tplAbsPath, distPath);
                wrench.readdirSyncRecursive(distPath).forEach(function(file) {
                    file = path.join(distPath, file);
                    fs.writeFileSync(file, mustache.render(fs.readFileSync(file, 'utf-8'), result), 'utf-8');
                });
            }

        });
    });

}

/**
 * Returns object, with keys as names of change-case methods, and values results of those methods.
 *
 * @param {string} string
 * @param {<string,function(string, function)>}
 */
function allChangeCases(string){
    const result = {};
    Object.keys(changeCase).forEach(caseMethodName=>{
        const caseMethod = changeCase[caseMethodName]
        result[caseMethodName] = function () {
            return function(text, render) {
                return caseMethod(render(text));
            }
        };
    })
    return result;
}
